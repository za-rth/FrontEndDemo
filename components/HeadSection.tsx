
export default function headSection() {
    return (
        <section>
        <header className="w-full flex justify-between bg-blue-700 w-full span" >
          <div className="items-start m-3 p-2">
            <h3>
              Title
            </h3>
          </div>
          <div className="flex items-stretch">

            <ul className="flex items-start justify-center m-3 p-2">
              <li className="">List 1</li>
              <li className="">List 2</li>
              <li className="">List 3</li>
            </ul>

          </div>
        </header>
      </section>

    );
}

