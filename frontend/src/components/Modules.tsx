import { Context } from "../services/Store";
import { useContext } from "react";
import { toast } from "react-toastify";

const columns = [...Array(12)].map((_, col) => col + 1); // array of columns 1..12
const rows = [...Array(8)].map((_, row) => String.fromCharCode(row + 65)); // array of rows A..H]

export const TipModule = () => {
  const [tips, setTips] = useContext(Context);

  // handle click for checkbox with its id
  const handleClick = (id: string) => {
    // console.log(tips.isSetEndTip)

    const row_col = id.split("-")[1];

    //get row with slice
    const row =
      row_col.slice(0, 1) >= "A" && row_col.slice(0, 1) <= "D" ? "A" : "E";
    const col = parseInt(row_col.slice(1));

    // console.log(row, col)

    let startTip = tips.startTip;
    let endTip = tips.endTip;

    if (tips.startTip.length < 4 || tips.endTip.length >= 4) {
      setTips({
        startTip: [],
        endTip: [],
      });
      startTip = [];
      endTip = [];
    } else {
      setTips({
        endTip: [],
      });
      endTip = [];
    }

    // loop from row to row + 4
    for (let i = 0; i < 4; i++) {
      const check_row = String.fromCharCode(`${row}`.charCodeAt(0) + i);
      const checkbox = document.getElementById(
        `tip-${check_row}${col}`,
      ) as HTMLInputElement;
      checkbox.checked = true;

      if (tips.startTip.length < 4 || tips.endTip.length >= 4) {
        startTip.push(`${check_row}${col}`);
      } else {
        endTip.push(`${check_row}${col}`);
      }
    }

    let numberOfTips = 0;

    if (startTip.length >= 4 && endTip.length >= 4) {
      const startCol = parseInt(String(startTip[0]).slice(1));
      const endCol = parseInt(String(endTip[0]).slice(1));

      const startRow = String(startTip[0]).slice(0, 1).charCodeAt(0);
      const endRow = String(endTip[0]).slice(0, 1).charCodeAt(0);

      if (startRow == 69 && endRow == 65) {
        numberOfTips = (12 - startCol + 1 + endCol) * 4;
      } else {
        numberOfTips = (endCol - startCol + 1) * 4;
      }
    }

    setTips({
      ...tips,
      startTip: startTip,
      endTip: endTip,
      numberOfTips: numberOfTips,
    });
  };

  const isInRange = (id) => {
    const row = id.slice(0, 1).charCodeAt(0);
    const col = parseInt(id.slice(1));

    const startGroup = tips.startTip;
    const endGroup = tips.endTip;

    if (startGroup.length >= 4) {
      for (let i = 0; i < 4; i++) {
        const startGroupRow = startGroup[i].slice(0, 1).charCodeAt(0);
        const startGroupCol = parseInt(startGroup[i].slice(1));

        if (startGroupRow === row && startGroupCol === col) {
          return true;
        }
      }
    }
    if (endGroup.length >= 4) {
      const startCol = parseInt(startGroup[0].slice(1));
      const endCol = parseInt(endGroup[0].slice(1));
      const startRow = startGroup[0].slice(0, 1).charCodeAt(0);
      const endRow = endGroup[0].slice(0, 1).charCodeAt(0);

      if (
        (startRow == 65 && endRow == 65) ||
        (startRow == 69 && endRow == 69)
      ) {
        for (let i = 0; i < 4; i++) {
          const startGroupRow = startGroup[i].slice(0, 1).charCodeAt(0);
          const startGroupCol = parseInt(startGroup[i].slice(1));

          const endGroupRow = endGroup[i].slice(0, 1).charCodeAt(0);
          const endGroupCol = parseInt(endGroup[i].slice(1));

          for (let j = startGroupCol; j <= endGroupCol; j++) {
            if (startGroupRow === row && j === col) {
              return true;
            }
          }
        }
      }

      if (startRow == 69 && endRow == 65) {
        for (let i = 0; i < 4; i++) {
          const startGroupRow = startGroup[i].slice(0, 1).charCodeAt(0);
          const startGroupCol = parseInt(startGroup[i].slice(1));

          const endGroupRow = endGroup[i].slice(0, 1).charCodeAt(0);
          const endGroupCol = parseInt(endGroup[i].slice(1));

          for (let j = startGroupCol; j <= 12; j++) {
            // console.log(startGroupRow, j)
            if (startGroupRow === row && j === col) {
              return true;
            }
          }

          for (let j = 1; j <= endGroupCol; j++) {
            // console.log(endGroupRow, j)
            if (endGroupRow === row && j === col) {
              return true;
            }
          }
        }
      }

      if (
        (startRow == 65 && endRow == 69) ||
        (startRow == endRow && startCol > endCol)
      ) {
        // toast.error("Failed to select tips. Please try again.");
        setTips({
          startTip: [],
          endTip: [],
        });
      }
    }

    return false;
  };

  return (
    <div className="flex flex-row items-center justify-center space-x-4">
      {[...Array(12)].map((_, row) => (
        <div key={row} className="space-y-2">
          {[...Array(8)].map((_, col) => (
            <div key={col}>
              <input
                type="checkbox"
                id={`tip-${rows[col]}${row + 1}`}
                className="h-6 w-6 appearance-none rounded-full border border-slate-500 bg-slate-600 transition-all duration-100 ease-out checked:border-transparent checked:bg-white hover:scale-110 hover:border-slate-400 hover:bg-slate-400"
                onClick={(e) => handleClick(e.currentTarget.id)}
                checked={isInRange(`${rows[col]}${row + 1}`)}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export const TipModuleWithInfo = () => {
  return (
    <div className="flex flex-col space-y-5">
      <div className="flex flex-row justify-end">
        <div className="-mr-2.5">
          {columns.map((col) => (
            <span
              key={col}
              className="space-x-tip-col relative rounded-full bg-blue-900 px-3 py-1 text-center text-white transition-all duration-100 ease-out hover:bg-blue-700"
            >
              {col}
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-row items-center justify-center space-x-4">
        <div className="space-y-1.5">
          {rows.map((row) => (
            <div key={row}>
              <p className="w-fit rounded-full bg-blue-900 px-3 py-1 text-center text-white transition-all duration-100 ease-out hover:scale-110 hover:bg-blue-700">
                {row}
              </p>
            </div>
          ))}
        </div>

        <TipModule />
      </div>
    </div>
  );
};
