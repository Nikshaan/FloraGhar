import { Link } from "react-router-dom"

const ErrorPage = () => {
  return (
    <div className="w-full h-full flex-col text-black bg-white flex justify-center items-center py-40">
        <p className="font-bold text-9xl">404</p>
        <p className="font-semibold text-2xl">PAGE NOT FOUND ._.</p>
        <Link to='/'>
            <button className="my-16 border-2 border-black p-2 rounded-full bg-purple-500 text-white font-semibold px-6 shadow-md shadow-black">RETURN TO HOME</button>
        </Link>
    </div>
  )
}

export default ErrorPage