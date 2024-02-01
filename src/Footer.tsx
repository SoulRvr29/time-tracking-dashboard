const Footer = () => {
  return (
    <footer className="absolute mx-auto w-screen left-0 bottom-0 text-center font-bold text-base text-Pale-Blue p-4 max-lg:p-4 max-lg:text-xs bg-Very-light-gray border-t-2 border-Dark-blue">
      Challenge by
      <a
        className="text-Desaturated-blue ml-1 hover:text-Light-red-(work) hover:underline"
        href="https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw"
        target="_blank"
      >
        Frontend Mentor
      </a>
      . Coded by
      <a
        className="text-Desaturated-blue ml-1 hover:text-Light-red-(work) hover:underline"
        href="https://www.frontendmentor.io/profile/SoulRvr29"
      >
        Paweł Chudecki
      </a>
      .
    </footer>
  );
};

export default Footer;
