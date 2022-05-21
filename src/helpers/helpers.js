export const parseLigand = (fileContent) => {
  const list = fileContent.split(/\r?\n/);
  let atoms = [];
  let connections = [];

  for (let i = 0; i < list.length; i++) {
    const line = list[i].split(/\s+/);
    if (line[0] === "ATOM") {
      atoms = [
        ...atoms,
        {
          name: line[11],
          coords: {
            x: line[6],
            y: line[7],
            z: line[8],
          },
        },
      ];
    } else if (line[0] === "CONECT" && line.length > 1) {
      const elm = parseInt(line[1], 10);
      if (elm <= atoms.length) {
        let connection = { atom: elm, connects: [] };
        for (let j = 2; j < line.length; j++) {
          let toElm = parseInt(line[j]);
          if (toElm <= atoms.length) {
            connection.connects.push(toElm);
          }
        }
        connections = [...connections, connection];
      }
    }
  }

  return {
    atoms,
    connections,
  };
};
