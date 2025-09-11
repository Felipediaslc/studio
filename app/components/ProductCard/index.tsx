"use client";
import Card from "../Card/index";




const products = [
  {
    image: "/lop.jpg",
    title: "UltraBook Pro X",
    subtitle: "HIGH-PERFORMANCE LAPTOP",
    description:
      "Powerful graphics with NVIDIA RTX 4080, 64GB RAM, and 2TB SSD for ultimate gaming performance.",
    tags: ["4K Display", "16-Hour Battery", "USB-C"],
    oldPrice: "$2,499",
    price: "$1,999",
    reviews: 245,
    inStock: true,
    hotSale: true,
  },
  {
    image: "/lop.jpg",
    title: "WorkMate 14",
    subtitle: "LIGHTWEIGHT BUSINESS LAPTOP",
    description:
      "Powerful graphics with NVIDIA RTX 4080, 64GB RAM, and 2TB SSD for ultimate gaming performance.",
    tags: ["1080p Display", "12-Hour Battery", "USB-C"],
    oldPrice: "$1,299",
    price: "$999",
    reviews: 120,
    inStock: true,
    hotSale: false,
  },
  {
    image: "/lop.jpg",
    title: "Gaming Beast Z",
    subtitle: "GAMING LAPTOP",
    description:
      "Powerful graphics with NVIDIA RTX 4080, 64GB RAM, and 2TB SSD for ultimate gaming performance.",
    tags: ["RTX 4080", "RGB Keyboard", "144Hz Display"],
    oldPrice: "$3,499",
    price: "$2,899",
    reviews: 89,
    inStock: false,
    hotSale: true,
  },
  {
    image: "/lop.jpg",
    title: "Gaming Beast Z",
    subtitle: "GAMING LAPTOP",
    description:
      "Powerful graphics with NVIDIA RTX 4080, 64GB RAM, and 2TB SSD for ultimate gaming performance.",
    tags: ["RTX 4080", "RGB Keyboard", "144Hz Display"],
    oldPrice: "$3,499",
    price: "$2,899",
    reviews: 89,
    inStock: false,
    hotSale: true,
  },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-transparent lg:h-auto px-6 py-12">
     
     <h1 className="text-[20px] tracking-[.25em] sm:text-2xl md:text-4xl lg:text-5xl font-semibold text-center font-author mb-6 text-white">
        Título
      </h1>

      {/* Grade responsiva */}
      <div className="items-center  grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <Card key={index} {...product} />
          

        ))}
       
      </div>
    </main>
  );
}