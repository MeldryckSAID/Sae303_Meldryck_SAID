export const getLabels = (lstData, label) => {
  let tl = label.split("#");
  let occurence = tl[1];
  let lbl = tl[0];
  let val = lbl.split(".");
  let retour = [];

  let set = new Set();
  let tabObj = [];
  lstData.forEach((element) => {
    switch (val.length) {
      case 1:
        if (occurence == 1) {
          set.add(element[val[0]]);
        }
        if (occurence == "multi") {
          element.forEach((elt) => {
            tabObj.push(elt[val[0]]);
          });
        }
        break;
      case 2:
        if (occurence == 1) {
          set.add(element[val[0]][val[1]]);
        }
        if (occurence == "multi") {
          element[val[0]].forEach((elt) => {
            tabObj.push(elt[val[1]]);
          });
        }
        break;
      case 3:
        if (occurence == 1) {
          set.add(element[val[0]][val[1]][val[2]]);
        }
        if (occurence == "multi") {
          element[val[0]][val[1]].forEach((elt) => {
            tabObj.push(elt[val[2]]);
          });
        }
        break;
      case 4:
        if (occurence == 1) {
          set.add(element[val[0]][val[1]][val[2]][val[3]]);
        }
        if (occurence == "multi") {
          element[val[0]][val[1]][val[2]].forEach((elt) => {
            tabObj.push(elt[val[3]]);
          });
        }
        break;
    }
  });

  if (occurence == "multi") {
    set = new Set(tabObj);
  }
  retour = Array.from(set);
  retour.sort();
  return retour;
};

export const countDatas = (lst, lstLabel, libLabel) => {
  let tl = libLabel.split("#");
  let lbl = tl[0];
  let occurence = tl[1];
  let val = lbl.split(".");
  let retour = [];
  lstLabel.forEach((label) => {
    let nb = 0;
    lst.forEach((element) => {
      switch (val.length) {
        case 1:
          if (occurence == 1) {
            if (element[val[0]] == label) {
              nb++;
            }
          }
          break;
        case 2:
          if (occurence == 1) {
            if (element[val[0]][val[1]] == label) {
              nb++;
            }
          }
          if (occurence == "multi") {
            element[val[0]].forEach((elt) => {
              if (elt[val[1]] == label) {
                nb++;
              }
            });
          }
          break;
        case 3:
          if (occurence == 1) {
            if (element[val[0]][val[1]][val[2]] == label) {
              nb++;
            }
          }
          if (occurence == "multi") {
            element[val[0]][val[1]].forEach((elt) => {
              if (elt[val[2]] == label) {
                nb++;
              }
            });
          }
          break;
      }
    });
    retour.push(nb);
  });
  return retour;
};
