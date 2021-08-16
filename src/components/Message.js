
import axios from "axios";
import { useState, useEffect } from 'react';


let MsgData = (props) => {
    const [msg, setMsg] = useState({
        msgid: 0,
        userid: 0,
        advid: 0,
        textMessage: ''
    });

    useEffect(
        () => {
            setMsg({
                msgid: '',
                userid: '',
                advid: '',
                textMessage: ''


            }
            );

        }, []);

    const handleMessage = (event) => {
        // console.log(msg.msgid);
        setMsg({
            ...msg,
            [event.target.name]: event.target.value
        });
    };

    const buyProduct = (event) => {
        console.log(event.target.advid.name);

        axios.post(`/buyer/sendMessage`, msg)
            .then((response) => {
                console.log(response.data.name);
            }).catch((error) => {
                console.log(error.message)
            });


        event.preventDefault();
    }

    return (
        <div>
            <h1 className=" text-primary">Send message to seller of Product</h1>
            <form onSubmit={buyProduct} className="form form-group">
                <div>
                    <input
                        type="number"
                        // id="msgid"
                        name="userid"
                        value={msg.userid}
                        placeholder="userid" 
                        className="form-control mb-2"
                        onChange={handleMessage}
                    />
                    {/* <input
                        type="number"
                        id="username"
                        name="username"
                        placeholder="username" 
                        value={msg.username}
                        className="form-control mb-2"
                        onChange={handleMessage}
                    /> */}
                    <input
                        type="number"
                        id="advid"
                        name="advid"
                        placeholder="advid" 
                        value={msg.advid}
                        className="form-control mb-2"
                        onChange={handleMessage}
                    />

                    <input
                        type="text"
                        id="textMessage"
                        name="textMessage"
                        placeholder="textMessage" 
                        value={msg.textMessage}
                        className="form-control mb-2"
                        onChange={handleMessage}
                    />
                </div>
                {/* <button type="submit" className="btn btn-success" > Send Message</button> */}
                <input type="submit" className="btn btn-dark btn-block" value="Message" />
            </form>


        </div>


    )



}

export default MsgData;