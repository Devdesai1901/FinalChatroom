import React from 'react';
import { Link } from 'react-router-dom';

function AdminDashboard() {
    return (
        <div className="flex flex-row h-screen">
            <div className="bg-[#5b5656] w-1/5 text-white p-8">
                <div className="font-bold text-2xl mb-8">Brainstorm Room</div>
                <ul>
                    <li className="mb-3 hover:text-gray-400">
                        <Link to="/admindashboard' element={<AdminDashboard />} />
            <Route exact path='tablechats' el" className="hover:text-gray-400">Home
                        </Link>
                    </li>
                    <li className="mb-3 hover:text-gray-400">
                        <Link to="/tablechats" className="hover:text-gray-400">
                            Chat Rooms
                        </Link>
                    </li>
                    <li className="mb-3 hover:text-gray-400">
                        <Link to="/deleteuser" className="hover:text-gray-400">
                            Delete User Account
                        </Link>
                    </li>
                    <li className="mb-3 hover:text-gray-400">
                        <Link to="/deletehost" className="hover:text-gray-400">
                            Delete Host Account
                        </Link>
                    </li>
                    <li className="mb-3 hover:text-gray-400">
                        {/* <Link to="/logout" className="hover:text-gray-400"> */}
                        Logout
                        {/* </Link> */}
                    </li>
                </ul>
            </div>
            <div className="bg-gray-200 w-4/5 p-8">
                <h1 className="font-bold text-2xl mb-8">Dashboard</h1>
                <div className="flex flex-row gap-8">
                    <div className="bg-white p-8 rounded-md shadow-md w-1/3">
                        <h2 className="font-bold text-lg mb-4">Total Users</h2>
                        <p className="text-3xl font-bold">100</p>
                    </div>
                    <div className="bg-white p-8 rounded-md shadow-md w-1/3">
                        <h2 className="font-bold text-lg mb-4">Active Users</h2>
                        <p className="text-3xl font-bold">50</p>
                    </div>
                    <div className="bg-white p-8 rounded-md shadow-md w-1/3">
                        <h2 className="font-bold text-lg mb-4">Total Chat Rooms</h2>
                        <p className="text-3xl font-bold">20</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminDashboard;