// There are n cities. Some of them are connected, while some are not. If city a is connected directly with city b, and city b is connected directly with city c, then city a is connected indirectly with city c.

// A province is a group of directly or indirectly connected cities and no other cities outside of the group.

// You are given an n x n matrix isConnected where isConnected[i][j] = 1 if the ith city and the jth city are directly connected, and isConnected[i][j] = 0 otherwise.

// Return the total number of provinces.

var findCircleNum = function (isConnected) {
    const n = isConnected.length;
    const visited = new Set();
    let provinceCount = 0;

    // DFS function to explore all connected cities from a given city
    const dfs = (city) => {
        for (let neighbor = 0; neighbor < n; neighbor++) {
            if (isConnected[city][neighbor] === 1 && !visited.has(neighbor)) {
                visited.add(neighbor);
                dfs(neighbor);
            }
        }
    };

    // Iterate through each city
    for (let city = 0; city < n; city++) {
        if (!visited.has(city)) {
            // If the city is unvisited, it's a new province
            provinceCount++;
            dfs(city);  // Explore the entire province
        }
    }

    return provinceCount;
}; 