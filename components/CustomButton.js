import Link from "next/link";

const CustomButton = ({ href = "/", children = "Button" }) => {
  return (
    <Link href={href}>
      <button className="flex ml-auto text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded">
        {children}
      </button>
    </Link>
  );
};

export default CustomButton;
