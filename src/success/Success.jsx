
export default function Success({setShow,zed}){
    function handleClick(){
        setShow(true)
    }
    return(
        <div className="w-80 bg-lime-50 rounded-xl p-6">
            <div className="h-10 w-10 mb-6"><img className='w-full' src="./icon-success.svg" alt="" /></div>
            <h2 className='text-4xl mb-4'>Thanks for subscribing</h2>
            <p className='mb-4'>
                A confirmation email has been sent to.
                <span className="in">{zed}</span>
                Please open it and click the button to confirm your subscription.

            </p>
            <button className='w-full h-14 bg-purple-700 rounded-lg' onClick={handleClick} >Dismiss message</button>
        </div>
    )
}