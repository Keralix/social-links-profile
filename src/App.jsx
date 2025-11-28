
function App() {

  return (
    <div className="bg-grey-800 flex flex-col justify-center items-center p-10 rounded-2xl gap-3 w-min  whitespace-nowrap">
      <img src="/images/avatar-jessica.jpeg" alt="jessica avatar" className="rounded-[50%] w-25 h-25 "/>
      <div className="text-white text-3xl font-semibold">Jessica Randall</div>
      <div className="text-green-0 font-semibold">London, United Kingdom</div>
      <div className="text-white mt-5 mb-5">"Front-end developer and avid reader."</div>
      <div className="mb-2 text-white bg-grey-700 w-full text-center p-4 font-semibold rounded-lg hover:text-grey-900 hover:bg-green-0 hover:cursor-pointer">GitHub</div>
      <div className="mb-2 text-white bg-grey-700 w-full text-center p-4 font-semibold rounded-lg hover:text-grey-900 hover:bg-green-0 hover:cursor-pointer">Frontend Mentor</div>
      <div className="mb-2 text-white bg-grey-700 w-full text-center p-4 font-semibold rounded-lg hover:text-grey-900 hover:bg-green-0 hover:cursor-pointer">LinkedIn</div>
      <div className="mb-2 text-white bg-grey-700 w-full text-center p-4 font-semibold rounded-lg hover:text-grey-900 hover:bg-green-0 hover:cursor-pointer">Twitter</div>
      <div className="mb-2 text-white bg-grey-700 w-full text-center p-4 font-semibold rounded-lg hover:text-grey-900 hover:bg-green-0 hover:cursor-pointer">Instagram</div>
    </div>
  )
}

export default App
