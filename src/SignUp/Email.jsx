import  {useState} from 'react';

export default function Email({setShow,setZed,zed}){
    const [text,setText] = useState("");

    function handleChange(e){
        setZed(e.target.value);
        
    }

    function handleSubmit(e){
        e.preventDefault();
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

        let email = emailPattern.test(zed);
        console.log("Submitted!");

        if(zed == "" | zed == null){
            setText("Email Cannot Be Null")
        
            
        }
        else if(email === false){
            setText("Please enter a valid email address")
        }
        else{
            setShow(false);
        }


        

    }
    return(
        
            <div className="flex flex-col lg:flex-row w-[95%] bg-lime-50 rounded-2xl lg:gap-4  lg:w-[60%] lg:p-4">
                <div className="order-2 lg:order-1 w-full pl-8 lg:w-1/2 lg:flex lg:flex-col justify-center">
                    

                    <h2 className='text-3xl mb-6'>Stay updated!</h2>
                    <p className='text-lg mb-4'>
                        Join 60,000+ product managers receiving monthly updates
                        on;
                    </p>
                    <ul className='flex flex-col gap-3 mb-6'>
                        <li className='flex gap-4'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="100%" x2="0%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FF6A3A"/><stop offset="100%" stop-color="#FF527B"/></linearGradient></defs><g fill="none"><circle cx="32" cy="32" r="32" fill="url(#a)"/><path stroke="#FFF" stroke-width="4" d="m18.286 34.686 8.334 7.98 19.094-18.285"/></g></svg>
                            Product discovery and bulding what matters
                        </li>
                        <li className='flex gap-4'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="100%" x2="0%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FF6A3A"/><stop offset="100%" stop-color="#FF527B"/></linearGradient></defs><g fill="none"><circle cx="32" cy="32" r="32" fill="url(#a)"/><path stroke="#FFF" stroke-width="4" d="m18.286 34.686 8.334 7.98 19.094-18.285"/></g></svg>
                            Measuring to ensure updates are a success 
                        </li>
                        <li className='flex gap-4'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="100%" x2="0%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FF6A3A"/><stop offset="100%" stop-color="#FF527B"/></linearGradient></defs><g fill="none"><circle cx="32" cy="32" r="32" fill="url(#a)"/><path stroke="#FFF" stroke-width="4" d="m18.286 34.686 8.334 7.98 19.094-18.285"/></g></svg>
                            And much more!
                        </li>
                    </ul>
                    <form action="" onSubmit={handleSubmit}>
                        <p className='mb-2'>
                            Email address {text}
                        </p>
                        <div className="w-full h-14 mb-4 rounded-lg ">
                            <input type="text" value={zed} className="h-full w-full outline-none border-solid px-4 cursor-pointer " placeholder='Email@company.com' onChange={handleChange}/>
                        </div>
                        <input className='w-full h-14 bg-purple-700 rounded-lg cursor-pointer'type="submit" value='subscribe to monthly newslater' />

                    </form>
                </div>
                <div className="order-1 md:order-2 lg:order-2 w-full lg:w-1/2" >
                    <picture className="">
                        <source media="(min-width: 668px)" srcSet='./public/illustration-sign-up-desktop.svg' />
                        <source media="(max-width: 668px)" srcSet='./public/illustration-sign-up-mobile.svg' />
                        <img className='h-auto w-full' src='./public/illustration-sign-up-desktop.svg' alt="logo"/>
                    </picture>
                </div>
            </div>
    )
}