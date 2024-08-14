
const Form = () => {
  return (
    <div>
        <form>
        <div className="flex flex-col py-8 max-md:px-4">
            <label className="block mb-2 text-lg font-medium text-white dark:text-white">Your Name</label>
            <input type='text' className="bg-zinc-900 border-2 border-zinc-700 text-gray-900 text-sm rounded block w-full p-2.5"></input>
            <label className="block mb-2 text-lg font-medium text-white dark:text-white mt-2">Email</label>
            <input type='email' className="bg-zinc-900 border-2 border-zinc-700 text-gray-900 text-sm rounded block w-full p-2.5"></input>
            <label className="block mb-2 text-lg font-medium text-white dark:text-white mt-2">Subject</label>
            <input type='text' className="bg-zinc-900 border-2 border-zinc-700 text-gray-900 text-sm rounded block w-full p-2.5"></input>
            <label  className="block mb-2 text-lg font-medium text-white dark:text-white mt-2">Message</label>
            <textarea rows="6" placeholder='Type your message' className="mb-4 bg-zinc-900 border-2 border-zinc-700 text-gray-900 text-sm rounded block w-full p-2.5"/>
            <button className='btn button'><a href="mailto:helensobia88@gmail.com" target="_blank">Send Email</a></button>            
            </div>
        </form>
    </div>
  )
}

export default Form;