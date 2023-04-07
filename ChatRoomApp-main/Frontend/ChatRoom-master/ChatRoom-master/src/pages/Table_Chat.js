import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Table_Chat() {
    // sample data for chat rooms
    const chatRoomsData = [
        { id: '#123', topic: 'AI in Healthcare', host: 'John', link: 'https://example.com/chatroom/123' },
        { id: '#456', topic: 'Future of Robotics', host: 'Mary', link: 'https://example.com/chatroom/456' },
        { id: '#789', topic: 'Cryptocurrency', host: 'Bob', link: 'https://example.com/chatroom/789' },
        { id: '#101', topic: 'Climate Change', host: 'Tom', link: 'https://example.com/chatroom/101' },
        { id: '#202', topic: 'Virtual Reality', host: 'Jane', link: 'https://example.com/chatroom/202' }
    ];

    // state for chat rooms
    const [chatRooms, setChatRooms] = useState(chatRoomsData);

    return (
        <div className="w-full max-w-4xl mx-auto my-4 px-4">
            <h2 className="text-lg font-medium mb-2">Available Chat Rooms</h2>
            <table className="w-full table-fixed">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="w-1/5 py-2 px-4">Chatroom ID</th>
                        <th className="w-2/5 py-2 px-4">Topic of Discussion</th>
                        <th className="w-1/5 py-2 px-4">Host</th>
                        <th className="w-1/5 py-2 px-4">History</th>
                    </tr>
                </thead>
                <tbody>
                    {chatRooms.map((chatRoom) => (
                        <tr key={chatRoom.id} className="bg-gray-100">
                            <td className="py-2 px-4">{chatRoom.id}</td>
                            <td className="py-2 px-4">{chatRoom.topic}</td>
                            <td className="py-2 px-4">{chatRoom.host}</td>
                            <td className="py-2 px-4"><a href={chatRoom.link} className="bg-[#5b5656] hover:scale-105 text-white font-bold py-1 px-2 rounded">Show</a></td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="mt-4 space-x-2">
                <h2 className="text-lg font-medium mb-2">Join a Chat Room</h2>
                <label className="block mb-2">
                    Enter the Chat Room ID to join:
                    <input type="text" className="block w-full border border-gray-400 py-2 px-4 rounded mt-1" />
                </label>

                <button className="bg-[#5b5656] hover:scale-105 text-white font-bold py-2 px-4 rounded">Join</button>
                <Link to="/"><button className="bg-[#5b5656] hover:scale-105 text-white font-bold py-2 px-4 rounded">Back</button></Link>
            </div>
        </div>
    );
}

export default Table_Chat;