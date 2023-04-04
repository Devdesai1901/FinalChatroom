import React, { useState,useEffect}  from 'react';
import { Link, useLocation ,useNavigate } from 'react-router-dom';
import axios from 'axios';


export default function GenerateLink() {
    const location = useLocation();
    const { role, data } = location.state;
    const [generatedLink, setGeneratedLink] = useState("");
    var res = "";
    // useEffect(() => {
    //     return () => {
    //         generate();
    //     };
    // }, []);
    const navigate=useNavigate();
    
    const generate = async () => {
        // e.preventDefault();


        const token = "Bearer " + localStorage.getItem("Token");
        console.log(token);


        const headers = {

            'Authorization': `${token}`,
            'Content-Type': 'application/json'
        }

        console.log(data.email_id);
        console.log(data.password)
        console.log(role);
      
       
        try {
            res = axios.post("/link/generate", data, { headers })
                .then((res) => {
                    console.log(res.data);
                    const temp =String(res.data);
                    setGeneratedLink(temp);
                    
                    
                });
                // console.log(name);
        } catch (err) {
            alert(err);
        }
       /* lik = res.data;
        console.log(lik);*/
        console.log(generatedLink);

    };
    return (
        <>
            <section className="bg-[#5b5656] min-h-screen flex items-center justify-center">
                <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
                    <div className="md:w-screen px-16">
                        <h2 className="font-bold text-3xl text-[#5b5656] text-center">
                            Generate Link
                        </h2>
                        <div action="" className="flex flex-col gap-4">
                            <input
                                className="p-2 mt-8 rounded-xl border"
                                type="text"
                                name="link"
                                value={generatedLink}
                                readOnly
                            // onChange={(event) => {
                            //   setTopic(event.target.value);
                            // }}
                            />

                            
                            <button className="bg-[#5b5656] rounded-xl text-white hover:scale-105 duration-300 py-2" onClick={generate} >
                                Generate
                            </button>
                             <Link to=
                                "/addparticipant" state={{role: role, data: data, generatedLink: generatedLink }}
                            > 
                                <button className="bg-[#5b5656] rounded-xl text-white hover:scale-105 duration-300 py-2 flex flex-col gap-4"  > 
                            {/* onClick={()=>navigate("/addparticipant",{state: {role: role, data: data, link: generatedLink }})} */}
                                    Next
                                </button>
                             </Link> 
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}