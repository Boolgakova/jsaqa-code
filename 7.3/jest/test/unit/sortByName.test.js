const sorting = require("../../app");

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    expect(
      sorting.sortByName([
        "Гарри Поттер",
        "Властелин Колец",
        "Волшебник изумрудного города",
      ])
    ).toEqual([
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ]);
  });

  it("Should not sort if the names are equal", () => {
    expect(
      sorting.sortByName(["Гарри Поттер", "Гарри Поттер", "Гарри Поттер"])
    ).toEqual(["Гарри Поттер", "Гарри Поттер", "Гарри Поттер"]);
  });
});
