import React, { useEffect, useState } from "react";
import { Carousel } from "antd";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const contentStyle = {
    // height: "840px",
    color: "#fff",
    // lineHeight: "180px",
    textAlign: "center",
    background: "#364d79",
    opacity: ".9",
};

const intialValue = {
    name: "",
    fname: "",
    course: "",
    number: "",
};

const Home = () => {
    // const notify = () => ;





    const sliderimage = {
        image: "https://images.unsplash.com/photo-1610552254576-9500a3e99999?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fHNjaG9vbHxlbnwwfHwwfHx8MA%3D%3D",
        image1: "https://plus.unsplash.com/premium_photo-1671070290623-d6f76bdbb3db?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        image2: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        image3: "https://images.unsplash.com/photo-1578593139939-cccb1e98698c?q=80&w=2093&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    };

    const [details, setdetails] = useState(intialValue);
    const [data, setData] = useState([]);
    const [selectid, setSelectid] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setdetails((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const hndleSubmit = (e) => {
        e.preventDefault();
        if (
            details.name == "" ||
            details.fname == "" ||
            details.course == "" ||
            details.number == ""
        ) {
            toast.warn("PLease Fill UP All input Boxes value !", {
                position: "top-right",
                autoClose: 5000,
                theme: "colored",
            });
            return;
        }

        if (selectid) {
            patchData(selectid);
            toast.success("data successfully updated !", {
                position: "top-right",
                autoClose: 5000,
                theme: "colored",
            });
        } else {
            postData();
            toast.success("Data successfully inserted in database", {
                position: "top-right",
                autoClose: 5000,
                theme: "colored",
            });
        }

        setdetails(intialValue);
    };

    const postData = async () => {
        try {
            let res = await axios.post(
                "https://renderjsondata.onrender.com/student",
                details
            );
            getData();
        } catch (error) {
            console.log(error);
        }
    };

    const getData = async () => {
        try {
            let res = await axios.get(
                "https://renderjsondata.onrender.com/student"
            );
            setData(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    const delData = async (id) => {
        try {
            await axios.delete(
                `https://renderjsondata.onrender.com/student/${id}`
            );
            getData();
            toast.error("selected data deleted successfully !", {
                position: "top-right",
                autoClose: 5000,
                theme: "colored",
            });
        } catch (error) {
            console.log(error);
        }
    };

    const updateData = (id) => {
        let selectitem = data.find((ele) => ele.id === id);
        if (selectitem) {
            setdetails(selectitem);
            setSelectid(id);
        }
    };

    const patchData = async (id) => {
        try {
            await axios.patch(
                `https://renderjsondata.onrender.com/student/${id}`,
                details
            );
            getData();
        } catch (error) {
            console.log(error);
        }
        setdetails(intialValue);
        setSelectid(null);
    };
    useEffect(() => {
        AOS.init({
            once: true,
            disable: "phone",
            duration: 1000,
            easing: "ease-out-cubic",
        });
        getData();
    }, []);

    return (
        <div>
            <ToastContainer />

            <div
                className="carousel_div"
                data-aos="zoom-out"
                data-aos-delay="100">
                <Carousel autoplay arrows infinite={true} className="carousel">
                    <div className="slider">
                        <h3 style={contentStyle}>
                            <img
                                style={{ objectFit: "cover" }}
                                src={sliderimage.image}
                                alt=""
                            />
                        </h3>
                    </div>
                    <div className="slider">
                        <h3 style={contentStyle}>
                            <img src={sliderimage.image1} alt="" />
                        </h3>
                    </div>
                    <div className="slider">
                        <h3 style={contentStyle}>
                            <img src={sliderimage.image3} alt="" />
                        </h3>
                    </div>
                    <div className="slider">
                        <h3 style={contentStyle}>
                            <img src={sliderimage.image2} alt="" />
                        </h3>
                    </div>
                </Carousel>
            </div>

            {/* <--------------------------------Section of Form -------------------> */}
            <div className="quteos">
                खोल दो पंख मेरे कहता है परिंदा, अभी तो और उड़ान बाकी है, ज़मीन
                नहीं है मंज़ील मेरी, अभी तो पूरा आसमान बाकी है
            </div>
            <div
                className="student_detials"
                data-aos="zoom-in"
                data-aos-delay="100">
                <div className="form">
                    <form action="#">
                        <h1>STUDENT ADMISSION DETAILS</h1>
                        <label htmlFor="name">NAME</label>
                        <input
                            type="text"
                            placeholder="Name"
                            onChange={handleChange}
                            value={details.name}
                            name="name"
                        />

                        <label htmlFor="name"> FATHER'S NAME</label>
                        <input
                            type="text"
                            placeholder="father's name"
                            onChange={handleChange}
                            value={details.fname}
                            name="fname"
                        />

                        <label htmlFor="name">COURSE</label>
                        <select
                            id=""
                            onChange={handleChange}
                            value={details.course}
                            name="course">
                            <option value="">---Course----</option>
                            <option value="JAVA">JAVA</option>
                            <option value="HTML">HTML</option>
                            <option value="REACT">REACT</option>
                        </select>
                        <label htmlFor="name">NUMBER</label>
                        <input
                            type="text"
                            placeholder="Number"
                            onChange={handleChange}
                            value={details.number}
                            name="number"
                        />
                        <div className="btn">
                            <button onClick={hndleSubmit}>
                                {selectid ? "Update" : "Submit"}
                            </button>
                        </div>
                    </form>
                </div>
                <div className="table">
                    <h1>STUDENT DETAILS</h1>
                    <table>
                        <thead>
                            <tr>
                                <th>Sr.no</th>
                                <th>Name</th>
                                <th>Father's Name</th>
                                <th>Course</th>
                                <th>Number</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.length === 0 ? (
                                <tr>
                                    <td
                                        colSpan="6"
                                        style={{ textAlign: "center",marginTop:"50px",fontSize:"30px" }}>
                                        No Data Available
                                    </td>
                                </tr>
                            ) : (
                                data.map((ele, index) => (
                                    <tr key={ele.id}>
                                        <td>{index + 1}</td>
                                        <td>{ele.name}</td>
                                        <td>{ele.fname}</td>
                                        <td>{ele.course}</td>
                                        <td>{ele.number}</td>
                                        <td className="btn_td">
                                            <button
                                                onClick={() =>
                                                    updateData(ele.id)
                                                }>
                                                Edit
                                            </button>
                                            <button
                                                onClick={() => delData(ele.id)}>
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
            <div>{/* <button onClick={notify}>Notify !</button> */}</div>
        </div>
    );
};

export default Home;
