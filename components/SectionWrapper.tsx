interface SectionWrapperProps {
  children: React.ReactNode;
  fullWidth?: boolean;
}

const SectionWrapper = ({
  children,
  fullWidth = false,
}: SectionWrapperProps) => {
  return (
    <section className="w-full flex justify-center">
      <div
        className={`w-full ${fullWidth ? "max-w-full" : "max-w-[2560px]"} px-4 sm:px-6 lg:px-0`}
      >
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
