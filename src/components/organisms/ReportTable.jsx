import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

const ReportTable = () => {
  const [reportData, setReportData] = useState({
    mostFrequentClients: [],
    leastFrequentClients: [],
    mostSoldCoffees: [],
    leastSoldCoffees: [],
  });

  useEffect(() => {
    const generateReport = async () => {
      try {
        // Obtener datos de clientes, cafés, órdenes y order_coffee
        const [clientResponse, coffeeResponse, orderResponse, orderCoffeeResponse] = await Promise.all([
          axios.get('http://100.27.97.251/api/client'),
          axios.get('http://100.27.97.251/api/coffee'),
          axios.get('http://100.27.97.251/api/order'),
          axios.get('http://100.27.97.251/api/order_coffee')
        ]);

        const clients = clientResponse.data;
        const coffees = coffeeResponse.data;
        const orders = orderResponse.data;
        const orderCoffees = orderCoffeeResponse.data;

        const coffeeSales = {};
        const clientOrders = {};

        // Procesar órdenes para contar las órdenes de cada cliente
        orders.forEach(order => {
          const clientId = order.client_id_fk; // Asegúrate de que el campo sea el correcto
          if (!clientOrders[clientId]) {
            clientOrders[clientId] = 0;
          }
          clientOrders[clientId] += 1;
        });

        // Procesar order_coffee para contar las ventas de cada café
        orderCoffees.forEach(orderCoffee => {
          if (!coffeeSales[orderCoffee.coffee_id]) {
            coffeeSales[orderCoffee.coffee_id] = 0;
          }
          coffeeSales[orderCoffee.coffee_id] += orderCoffee.quantity;
        });

        // Encontrar café más y menos vendido
        const maxSales = Math.max(...Object.values(coffeeSales));
        const minSales = Math.min(...Object.values(coffeeSales));
        const mostSoldCoffees = coffees.filter(coffee => coffeeSales[coffee.coffee_id] === maxSales);
        const leastSoldCoffees = coffees.filter(coffee => coffeeSales[coffee.coffee_id] === minSales);

        // Encontrar cliente con más y menos órdenes
        const maxOrders = Math.max(...Object.values(clientOrders));
        const minOrders = Math.min(...Object.values(clientOrders));
        const mostFrequentClientIds = Object.keys(clientOrders).filter(id => clientOrders[id] === maxOrders);
        const leastFrequentClientIds = Object.keys(clientOrders).filter(id => clientOrders[id] === minOrders);

        // Obtener nombres de clientes más frecuentes y menos frecuentes
        const mostFrequentClients = clients.filter(client => mostFrequentClientIds.includes(client.client_id));
        const leastFrequentClients = clients.filter(client => leastFrequentClientIds.includes(client.client_id));

        setReportData({
          mostFrequentClients,
          leastFrequentClients,
          mostSoldCoffees,
          leastSoldCoffees,
        });
      } catch (error) {
        console.error('Error generating report:', error);
        alert('Error al generar el reporte');
      }
    };

    generateReport();
  }, []);

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.text('Reporte de Ventas', 20, 20);

    doc.autoTable({
      head: [['Cliente Más Frecuente', 'Cliente Menos Frecuente', 'Café Más Vendido', 'Café Menos Vendido']],
      body: [
        [
          reportData.mostFrequentClients.length > 0 ? 
            reportData.mostFrequentClients.map(client => client.firstname).join(', ') : 'N/A',
          reportData.leastFrequentClients.length > 0 ? 
            reportData.leastFrequentClients.map(client => client.firstname).join(', ') : 'N/A',
          reportData.mostSoldCoffees.length > 0 ? 
            reportData.mostSoldCoffees.map(coffee => coffee.name).join(', ') : 'N/A',
          reportData.leastSoldCoffees.length > 0 ? 
            reportData.leastSoldCoffees.map(coffee => coffee.name).join(', ') : 'N/A'
        ]
      ],
      startY: 30,
    });

    doc.save('reporte_ventas.pdf');
    alert('Reporte generado con éxito');
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Reporte de Ventas</h2>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Cliente Más Frecuente</th>
            <th className="py-2 px-4 border-b">Cliente Menos Frecuente</th>
            <th className="py-2 px-4 border-b">Café Más Vendido</th>
            <th className="py-2 px-4 border-b">Café Menos Vendido</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-4 border-b">
              {reportData.mostFrequentClients.length > 0 ? 
                reportData.mostFrequentClients.map(client => client.firstname).join(', ') : 'N/A'}
            </td>
            <td className="py-2 px-4 border-b">
              {reportData.leastFrequentClients.length > 0 ? 
                reportData.leastFrequentClients.map(client => client.firstname).join(', ') : 'N/A'}
            </td>
            <td className="py-2 px-4 border-b">
              {reportData.mostSoldCoffees.length > 0 ? 
                reportData.mostSoldCoffees.map(coffee => coffee.name).join(', ') : 'N/A'}
            </td>
            <td className="py-2 px-4 border-b">
              {reportData.leastSoldCoffees.length > 0 ? 
                reportData.leastSoldCoffees.map(coffee => coffee.name).join(', ') : 'N/A'}
            </td>
          </tr>
        </tbody>
      </table>
      <button onClick={downloadPDF} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Descargar PDF</button>
    </div>
  );
};

export default ReportTable;
