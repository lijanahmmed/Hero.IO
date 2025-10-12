import React from 'react';
import {
    BarChart,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from 'recharts';

const Recharts = ({ ratings }) => {
    console.log(ratings)
    return (
        <div className='mt-15'>
            <h3 className='text-lg font-bold'>Rating</h3>
            <div className='w-full h-80 mt-5'>
                <ResponsiveContainer>
                    <BarChart
                        layout="vertical"
                        data={ratings}
                        margin={{
                            top: 20,
                            right: 20,
                            bottom: 20,
                            left: 20,
                        }}
                    >
                        <CartesianGrid stroke="#f5f5f5" />
                        <XAxis type="number" />
                        <YAxis dataKey="name" type="category" reversed/>
                        <Tooltip />
                        <Area dataKey="count" fill="white" />
                        <Bar dataKey="count" barSize={20} fill="orange" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Recharts;