interface EventCardProps {
  title: string;
  description: string;
  linkText?: string;
  linkUrl?: string;
  registerText?: string;
  registerUrl?: string;
  footer?: string;
  imageUrl?: string;
}

const EventCard = ({
  title,
  description,
  linkText,
  linkUrl,
  registerText,
  registerUrl,
  footer,
  imageUrl,
}: EventCardProps) => {
  return (
    <div className="border-2 border-black p-0 flex flex-col md:flex-row gap-0 md:gap-8">
      <div className="flex-1 p-8">
        <h3 className="font-serif text-3xl mb-6">{title}</h3>
        <p className="mb-6 leading-relaxed text-lg w-full">{description}</p>
{linkText && linkUrl && (
  <div className="mb-4">
    <a
      href={linkUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="
        inline-block
        bg-black text-white
        px-6 py-2 rounded-full
        text-lg font-semibold
        transition-all duration-300
        hover:scale-105 hover:bg-gray-800
      "
    >
      {linkText}
    </a>
  </div>
)}

       {registerText && registerUrl && (
  <>
    <p className="mb-3 text-lg">Already SOLD? Register now:</p>
    <a
      href={registerUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="
        inline-block
        bg-primary text-primary-foreground
        px-6 py-2 rounded-full
        text-lg font-semibold
        transition-all duration-300
        hover:scale-105 hover:shadow-lg
        active:scale-95
      "
    >
      {registerText}
    </a>
  </>
)}

        {footer && <p className="font-medium text-lg">{footer}</p>}
      </div>
      {imageUrl && (
        <div className="w-full md:w-64 flex-shrink-0">
          <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
        </div>
      )}
    </div>
  );
};

export default EventCard;
