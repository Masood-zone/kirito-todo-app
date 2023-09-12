function SideBar({ links }) {
  return (
    <>
      <div className="w-[218px] h-full px-9 border-r-2 border-r-gray-300">
        <div className="py-[150px]">
          <ul>
            {links.map((link) => {
              return (
                <li className="pb-3 text-lg font-medium" key={link.id}>
                  <a href={link.link} className="active:text-[#EA5959] ">
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default SideBar;
