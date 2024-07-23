import React from "react";

function TextDesign() {
  const textBox1 = "RPM";
  const textArr1 = [...textBox1];
  const textBox2 = "ACADEMY";
  const textArr2 = [...textBox2];
  const textBox3 = "Green City Phase-2,Gorakhnath,Gorakhpur-273015";
  const textArr3 = [...textBox3];
  return (
    <div>
      <div className="relative">
        <div className="uppercase text-center w-full font-bona-nova-sc-bold absolute top-0 mt-8">
          <h1 className="text-9xl uppercase  font-raleway">
            <span className="text-blue-500">
              &nbsp;
              {textArr1.map((text) => (
                <span className="hover:text-pink-700 hover:outline-blue-500 hover:font-rajdhani-medium">
                  {text}
                </span>
              ))}
            </span>
            <span className="text-[#ff0d0d]">
              {textArr2.map((text) => (
                <span className="hover:text-pink-700">{text}</span>
              ))}
            </span>
          </h1>
          <p className="text-4xl ml-[17%] bg-cyan-600 mt-5 w-2/3 font-rajdhani-bold cursor-none">
            {textArr3.map((text) => (
              <span className="hover:text-pink-700">{text}</span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
}
export function TextDesign2() {
  const textBox1 = "RPM";
  const textArr1 = [...textBox1];
  const textBox2 = "ACADEMY";
  const textArr2 = [...textBox2];
  const textBox3 = "Green City Phase-2,Gorakhnath,Gorakhpur-273015";
  const textArr3 = [...textBox3];
  return (
    <div className="uppercase text-center w-full font-bona-nova-sc-bold absolute bottom-0 mt-8">
      <h1 className="text-8xl uppercase  font-raleway">
        <span className="text-blue-500">
          &nbsp;
          {textArr1.map((text) => (
            <span className="hover:text-pink-700 hover:outline-blue-500 hover:font-rajdhani-medium">
              {text}
            </span>
          ))}
        </span>
        <span className="text-[#ff0d0d]">
          {textArr2.map((text) => (
            <span className="hover:text-pink-700">{text}</span>
          ))}
        </span>
      </h1>
      <p className="text-xl ml-[17%] bg-cyan-600 mt-5 w-2/3 font-rajdhani-bold cursor-none">
        {textArr3.map((text) => (
          <span className="hover:text-pink-700">{text}</span>
        ))}
      </p>
      <p className="font-quicksand text-base font-semibold text-[10.5px] text-[#145589] bg-gray-200">
        [ Affiliated to: Central Board Of Secondary Education, Delhi ,
        Affiliation Number - 2132489 ]
      </p>
    </div>
  );
}

export default TextDesign;
