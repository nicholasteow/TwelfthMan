fetch("http://localhost:3000/")
  .then((response) => response.json())
  .then((data) => {
    // Process the response data from the proxy server
    const datas = data["standings"][0]["table"];
    createTableRows(datas);
  })
  .catch((error) => {
    // Handle errors
    console.error(error);
  });

function createTableRows(datas) {
  const tbody = document.querySelector("#standings-table tbody");

  // Loop through the standings data and create a table row for each team
  datas.forEach((teamData) => {
    const row = document.createElement("tr");

    // Create and populate the cells for each team's data
    const positionCell = document.createElement("td");
    positionCell.textContent = teamData.position;
    if (teamData.position >= 1 && teamData.position <= 4) {
      positionCell.classList.add("position", "zone1-4");
    } else if (teamData.position >= 5 && teamData.position <= 6) {
      positionCell.classList.add("position", "zone5-6");
    } else if (teamData.position === 7) {
      positionCell.classList.add("position", "zone7");
    } else if (teamData.position >= 18 && teamData.position <= 20) {
      positionCell.classList.add("position", "zone18-20");
    } else {
      positionCell.classList.add("position");
    }

    row.appendChild(positionCell);

    const teamCell = document.createElement("td");
    const image = document.createElement("img");
    image.src = teamData.team.crest;
    image.classList.add("crest-image");
    teamCell.textContent = teamData.team.name;
    teamCell.appendChild(image); // Append the image to the teamCell instead of the row
    row.appendChild(teamCell); // Append the teamCell to the row

    const playedGamesCell = document.createElement("td");
    playedGamesCell.textContent = teamData.playedGames;
    row.appendChild(playedGamesCell);

    const winsCell = document.createElement("td");
    winsCell.textContent = teamData.won;
    row.appendChild(winsCell);

    const drawsCell = document.createElement("td");
    drawsCell.textContent = teamData.draw;
    row.appendChild(drawsCell);

    const lossesCell = document.createElement("td");
    lossesCell.textContent = teamData.lost;
    row.appendChild(lossesCell);

    const goalforCell = document.createElement("td");
    goalforCell.textContent = teamData.goalsFor;
    row.appendChild(goalforCell);

    const goalagainstCell = document.createElement("td");
    goalagainstCell.textContent = teamData.goalsAgainst;
    row.appendChild(goalagainstCell);

    const goaldiffCell = document.createElement("td");
    goaldiffCell.textContent = teamData.goalDifference;
    row.appendChild(goaldiffCell);

    const pointsCell = document.createElement("td");
    pointsCell.textContent = teamData.points;
    row.appendChild(pointsCell);

    const formCell = document.createElement("td");
    formCell.textContent = teamData.form;
    row.appendChild(formCell);

    // Append the row to the table body
    tbody.appendChild(row);
  });
}
