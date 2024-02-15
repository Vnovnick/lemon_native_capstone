import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("little_lemon");

export async function createTable() {
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          "create table if not exists menu (name text, price text, category text, description text, image text);"
        );
      },
      reject,
      resolve
    );
  });
}

export async function getMenuItems() {
  return new Promise((resolve) => {
    db.transaction((tx) => {
      tx.executeSql("select * from menu", [], (_, { rows }) => {
        resolve(rows._array);
      });
    });
  });
}

export function saveMenuItems(menuItems) {
  console.log(
    "items",
    menuItems
      .map(
        (item) =>
          `('${item.name}', '${item.price}', '${item.category}', '${item.description}', '${item.image}')`
      )
      .join(", ")
  );
  db.transaction((tx) => {
    tx.executeSql(
      `insert into menu (name, price, category, description, image) values ${menuItems
        .map(
          (item) =>
            `('${item.name}', '${item.price}', '${
              item.category
            }', '${item.description.replace("'", "`")}', '${item.image}')`
        )
        .join(", ")};`,
      [],
      (_, resultset) => console.log("success"),
      (_, error) => console.log("trx error", error)
    );
  });
}

export async function filterByQueryAndCategories(query, activeCategories) {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `select * from menuitems where category in (${activeCategories
          .map((category) => `'${category}'`)
          .join(", ")}) and title like '%${query}%'`,
        [],
        (_, { rows }) => {
          resolve(rows._array);
        },
        reject
      );
    });
  });
}
