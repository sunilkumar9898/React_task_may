import React, { useEffect, useState } from "react";
import { Carousel } from "antd";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
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
    course: "",
    number: "",
};

const Home = () => {
    const sliderimage = {
        image: "https://images.unsplash.com/photo-1549057446-9f5c6ac91a04?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        image1: "https://images.unsplash.com/photo-1565689157206-0fddef7589a2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        image2: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        image3: "https://media.istockphoto.com/id/1359499567/photo/young-woman-working-at-home-stock-photo.jpg?s=2048x2048&w=is&k=20&c=8EHJa7_f3JRuDarFsUgTJbIzKMopSI6pvMkITuQZhHI=",
    };

    const [details, setdetails] = useState(intialValue);
    const [data, setData] = useState([])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setdetails((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const hndleSubmit = (e) => {
        e.preventDefault();
        postData();

        setdetails(intialValue);
    };

    const postData = async () => {
        try {
            let res = await axios.post(
                "https://renderjsondata.onrender.com/student",
                details
            );
            getData()
        } catch (error) {
            console.log(error);
        }
    };

    const getData = async () => {
        try {
            let res = await axios.get(
                "https://renderjsondata.onrender.com/student"
            );
            setData(res.data)
        } catch (error) {
            console.log(error);
        }
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
                            placeholder="Name"
                            onChange={handleChange}
                            value={details.number}
                            name="number"
                        />
                        <div className="btn">
                            <button onClick={hndleSubmit}>submit</button>
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
                                <th>Course</th>
                                <th>NUMBER</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((ele, index) => (
                                <tr key={ele.id}>
                                    <td>{index + 1}</td>
                                    <td>{ele.name}</td>
                                    <td>{ele.course}</td>
                                    <td>{ele.number}</td>
                                    <td>
                                        <button>Delete</button>
                                        <button>Edit</button>
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

export default Home;
