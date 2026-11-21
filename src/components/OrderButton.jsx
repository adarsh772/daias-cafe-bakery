export default function OrderButton({ children = 'Order Online', className = '' }) {
  const message = "Hello Daia's Cafe! I would like to place an order.";
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/917017885024?text=${encodedMessage}`;

  return (
    <a 
      href={whatsappUrl}
      target="_blank" 
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center bg-[#9E6B43] hover:bg-[#855632] text-[#FAF6F0] text-sm font-medium tracking-wide px-5 py-2.5 rounded-[4px] transition-all duration-200 shadow-sm hover:shadow cursor-pointer whitespace-nowrap ${className}`}
    >
      {children}
    </a>
  );
}