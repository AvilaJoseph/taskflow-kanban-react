export function IconButton({ children }) {
    return (
        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-500 hover:bg-gray-100 transition">{children}</button>
    )
}