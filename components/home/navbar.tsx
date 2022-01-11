export const Navbar = () => {
  return (
    <div className="h-16 z-30 bg-transparent w-full">
      <div className="flex items-center my-auto py-4 justify-between ">
        <div className="my-auto text-white opacity-90">
          <p>Av. M.Emin GÜMÜŞ</p>
        </div>
        <div>
          <ul className="flex space-x-4 text-white text-opacity-75">
            <li className="hover:text-yellow-700 cursor-pointer">Hakkımızda</li>
            <li className="hover:text-yellow-700 cursor-pointer">
              Faaliyet Alanları
            </li>
            <li className="hover:text-yellow-700 cursor-pointer">İletişim</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
