import { useState } from 'react';
import { Link } from 'react-router-dom';

function Delete_host() {
    const [collegeid, setCollegeid] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleCollegeIDChange = (event) => {
        setCollegeid(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // handle verification and deletion logic here
    };

    return (
        <section className="bg-[#5b5656] min-h-screen flex items-center justify-center">
            <div className="bg-gray-100 flex rounded-3xl shadow-lg max-w-2xl p-4 items-center justify-center">
                <div className="md:w-screen px-16">
                    <h1 className="font-bold text-2xl text-[#5b5656]">
                        Delete Host Account
                    </h1>
                    <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-lg">
                        <label className="block mb-2 font-bold" htmlFor="name">
                            College ID:
                            <input
                                className="border border-gray-500 w-full py-2 px-3 rounded-lg"
                                type="text"
                                name="collegeid"
                                id="collegeid"
                                value={collegeid}
                                onChange={handleCollegeIDChange}
                                required
                            />
                        </label>
                        <label className="block mb-2 font-bold" htmlFor="email">
                            Email:
                            <input
                                className="border border-gray-500 w-full py-2 px-3 rounded-lg"
                                type="email"
                                name="email"
                                id="email"
                                value={email}
                                onChange={handleEmailChange}
                                required
                            />
                        </label>
                        <label className="block mb-2 font-bold" htmlFor="password">
                            Admin Password:
                            <input
                                className="border border-gray-500 w-full py-2 px-3 rounded-lg"
                                type="password"
                                name="password"
                                id="password"
                                value={password}
                                onChange={handlePasswordChange}
                                required
                            />
                        </label>
                        <div className='space-x-2'>
                            <button
                                className="bg-[#5b5656] hover:bg-red-500 text-white font-bold py-2 px-4 rounded mt-6"
                                type="submit"
                            >
                                Verify and Delete Account
                            </button>
                            <Link to="/"><button className="bg-[#5b5656] hover:scale-105 text-white font-bold py-2 px-4 rounded">Back</button></Link>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Delete_host;