import { React } from 'react';
import Grid from "@mui/material/Grid";
import DefaultDoughnutChart from './chart/DoughnutChart';
import DefaultBarChart from './chart/BarChart';
import logo from './img/bg-reset-cover.jpeg';
import logo1 from './img/home-decor-2.jpg';
import logo2 from './img/home-decor-1.jpg';
import logo3 from './img/home-decor-3.jpg';

export default function Home() {
    return (
        <main className='main-container'>
            <div className="content">
                <div className="cards">
                    <div className="card">
                        <img src={logo} className='im  card__image' alt="" />
                        <div className="text">
                            <p>Earning</p>
                            <h2>$198k</h2>
                            <h6><span className='green'>+37.8%</span> this month</h6>
                        </div>
                    </div>
                    <div className="card">
                        <img src={logo2} className='im  card__image' alt="" />
                        <div className="text">
                            <p>Orders</p>
                            <h2>$2.4k</h2>
                            <h6><span className='red'>-2%</span> this month</h6>
                        </div>
                    </div>
                    <div className="card">
                        <img src={logo3} className='im  card__image' alt="" />
                        <div className="text">
                            <p>Balance</p>
                            <h2>$2.4k</h2>
                            <h6><span className='red'>-2%</span> this month</h6>
                        </div>
                    </div>
                    <div className="card">
                        <img src={logo1} className='im  card__image' alt="" />
                        <div className="text">
                            <p>Sales</p>
                            <h2>$89k</h2>
                            <h6><span className='green'>+11%</span> this month</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className='card1'>
                <div className='card-inner'>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6} lg={8}>
                            <div className='barcard'>
                                <h3 className='head'>Overview</h3>
                                <p className='p1'>Monthly Earning</p>
                                <DefaultBarChart className='chat' />
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6} lg={4}>
                            <div className='barcard'>
                                <h3>Customers</h3>
                                <p className='p1'>Customers that buy products</p>
                                <DefaultDoughnutChart />
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
            <div className='table'>
                <section className='table_header'>
                    <h1>Product Sell</h1>
                </section>
                <section className='table_body'>
                    <table>
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Stock</th>
                                <th>Price</th>
                                <th>Total Sales</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><img src={logo} />Abstract 3D</td>
                                <td>32 in stock</td>
                                <td>$45.99</td>
                                <td>20</td>
                            </tr>
                            <tr>
                                <td><img src={logo1} />Sarphens Iluustration</td>
                                <td>32 in stock</td>
                                <td>$45.99</td>
                                <td>20</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </div>
        </main>
    )
}