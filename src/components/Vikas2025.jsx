import React from 'react';

const Vikas2025 = () => {
    return (
        <div className='h-screen p-5 w-full bg-gradient-to-b from-[#c71d6f] to-[#d09693]'>
            <h1 className='text-8xl mb-20 mt-0 ml-10 text-center text-white'>Vikas</h1>
            <div className='flex flex-row'>
            <div className='flex flex-col justify-center items-start w-2/4 gap-3'>
                <div className='flex flex-row justify-evenly gap-3'>
                    <div className='rounded-full border-4 h-96 w-96 bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center'>
                        <span className='text-4xl font-bold text-white'>V1</span>
                    </div>
                    <div className='rounded-full border-4 h-96 w-96 bg-gradient-to-br from-green-400 to-blue-400 flex items-center justify-center'>
                        <span className='text-4xl font-bold text-white'>V2</span>
                    </div>
                </div>
                <div className='rounded-full border-4 h-96 w-96 bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center self-center'>
                    <span className='text-4xl font-bold text-white'>V3</span>
                </div>
            </div>
            <div className='place-self-center ml-10 justify-self-end w-2/4'>
                <p className='text-white text-2xl'>
                    Dear Vikas,
                    <br /><br />
                    From day one, you've been the backbone of our coding adventures! Your dedication to perfecting every line of code and your incredible problem-solving skills have saved us countless times from debugging nightmares.
                    <br /><br />
                    Remember all those late-night sessions where we'd be stuck on a bug for hours, and then you'd come in with that "aha!" moment and fix it in minutes? Your systematic approach to breaking down complex problems into manageable pieces has taught us all how to think like better developers.
                    <br /><br />
                    Whether it's optimizing algorithms, reviewing pull requests, or explaining complex concepts to the rest of us, you always do it with patience and precision. Your attention to detail and commitment to clean, efficient code has elevated our entire team's standards.
                    <br /><br />
                    Thanks for being our reliable code wizard and for always pushing us to write better, cleaner, and more efficient solutions. Here's to many more breakthroughs and innovations together!
                </p>
            </div>
            </div>
        </div>
    );
};

export default Vikas2025;