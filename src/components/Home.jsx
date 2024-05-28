import React from 'react';

const Home = () => {
    return (
        <div className='hero min-h-screen bg-base-200'>
            <div className='hero-content flex-col lg:flex-row-reverse'>
                <div className='text-center lg:text-left'>
                    <h1 className='text-5xl font-bold'>Welcome!</h1>
                    <p className='py-6'>Enjoy this template equipped with the basics to get you started. Keep on Building!  <span className='text-2xl'>🚀</span> </p>
                    <a href="https://daisyui.com/components/" target="_blank">
                        <button className="btn btn-primary mb-2">Choose Your Components</button></a>
                </div>
                <div className='card shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
                    <div className='mockup-code'>
                        <pre data-prefix='$'>
                            <code>"react-router-dom": "^6.23.1"</code>
                        </pre>
                        <pre data-prefix='$'>
                            <code>"daisyui": "^4.10.1",</code>
                        </pre>
                        <pre data-prefix='$'>
                            <code>"axios": "^1.6.8",</code>
                        </pre>
                        <pre data-prefix='$'>
                            <code>"tailwindcss": "^3.4.3",</code>
                        </pre>
                        <pre data-prefix='$'>
                            <code>"vite": "^5.2.0"</code>
                        </pre>
                        <pre data-prefix='$'>
                            <code>"postcss": "^8.4.38",</code>
                        </pre>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
