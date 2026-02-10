import React from 'react';
import { CreditCard, DollarSign, Download, Clock, CheckCircle } from 'lucide-react';

const Payments = () => {
  const fees = [
    { type: 'Tuition Fee', amount: 45000, due: '2026-01-15', status: 'Paid' },
    { type: 'Exam Fee', amount: 2500, due: '2026-03-01', status: 'Pending' },
    { type: 'Hostel Fee', amount: 12000, due: '2026-01-15', status: 'Paid' },
    { type: 'Library Fine', amount: 150, due: '2026-02-10', status: 'Pending' }
  ];

  const history = [
    { id: 'TXN100234', date: '2026-01-14', amount: 57000, mode: 'Online Banking' },
    { id: 'TXN100188', date: '2025-08-10', amount: 57000, mode: 'UPI' },
    { id: 'TXN100052', date: '2025-01-12', amount: 55000, mode: 'Debit Card' }
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Payments & Fees</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Fee Summary */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-primary" />
              Fee Summary (Spring 2026)
            </h2>
          </div>
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {fees.map((fee, idx) => (
              <div key={idx} className="p-4 rounded-lg border border-gray-100 bg-gray-50 flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium text-gray-600">{fee.type}</p>
                  <p className="text-lg font-bold text-gray-800">₹{fee.amount.toLocaleString()}</p>
                  <p className="text-xs text-gray-400">Due: {fee.due}</p>
                </div>
                <div className="text-right">
                  <span className={`px-2 py-1 rounded text-xs font-medium block w-fit ml-auto mb-2 ${
                    fee.status === 'Paid' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                  }`}>
                    {fee.status}
                  </span>
                  {fee.status === 'Paid' ? (
                    <button 
                      onClick={() => alert("Downloading Receipt...")}
                      className="text-xs text-primary hover:underline flex items-center gap-1 ml-auto"
                    >
                      <Download className="w-3 h-3" /> Receipt
                    </button>
                  ) : (
                    <button 
                      onClick={() => alert("Redirecting to Payment Gateway...")}
                      className="px-3 py-1 bg-primary text-white text-xs rounded hover:bg-blue-800 transition-colors"
                    >
                      Pay Now
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Total Outstanding */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col justify-center items-center text-center">
          <div className="p-4 bg-red-50 text-red-600 rounded-full mb-4">
            <CreditCard className="w-8 h-8" />
          </div>
          <h2 className="text-gray-500 text-sm font-medium">Total Outstanding</h2>
          <p className="text-3xl font-bold text-gray-800 mt-2">₹2,650</p>
          <p className="text-xs text-red-500 mt-1">Due by 01 Mar 2026</p>
          <button 
            onClick={() => alert("Paying all dues...")}
            className="mt-6 w-full py-2 bg-primary text-white rounded-lg font-medium hover:bg-blue-800 transition-colors"
          >
            Pay All Dues
          </button>
        </div>
      </div>

      {/* Payment History */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
            <Clock className="w-5 h-5 text-primary" />
            Payment History
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="p-4 text-sm font-semibold text-gray-600">Transaction ID</th>
                <th className="p-4 text-sm font-semibold text-gray-600">Date</th>
                <th className="p-4 text-sm font-semibold text-gray-600">Amount</th>
                <th className="p-4 text-sm font-semibold text-gray-600">Mode</th>
                <th className="p-4 text-sm font-semibold text-gray-600">Status</th>
              </tr>
            </thead>
            <tbody>
              {history.map((txn) => (
                <tr key={txn.id} className="border-b border-gray-50 hover:bg-gray-50/50">
                  <td className="p-4 text-sm font-medium text-gray-800">{txn.id}</td>
                  <td className="p-4 text-sm text-gray-600">{txn.date}</td>
                  <td className="p-4 text-sm font-medium text-gray-800">₹{txn.amount.toLocaleString()}</td>
                  <td className="p-4 text-sm text-gray-600">{txn.mode}</td>
                  <td className="p-4 text-sm text-green-600 flex items-center gap-1">
                    <CheckCircle className="w-4 h-4" /> Success
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Payments;
