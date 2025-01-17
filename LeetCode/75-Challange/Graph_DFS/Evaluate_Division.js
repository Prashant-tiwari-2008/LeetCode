// You are given an array of variable pairs equations and an array of real numbers values, where equations[i] = [Ai, Bi] and values[i] represent the equation Ai / Bi = values[i]. Each Ai or Bi is a string that represents a single variable.

// You are also given some queries, where queries[j] = [Cj, Dj] represents the jth query where you must find the answer for Cj / Dj = ?.

// Return the answers to all queries. If a single answer cannot be determined, return -1.0.

// Note: The input is always valid. You may assume that evaluating the queries will not result in division by zero and that there is no contradiction.

// Note: The variables that do not occur in the list of equations are undefined, so the answer cannot be determined for them.
// Input: equations = [["a","b"],["b","c"]], values = [2.0,3.0], queries = [["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]]
// Output: [6.00000,0.50000,-1.00000,1.00000,-1.00000]

var calcEquation = function (eqn, values, queries) {
    const graph = new Map();

    eqn.map(([a, b], index) => {
        const value = values[index]
        if (!graph.has(a)) graph.set(a, [])
        if (!graph.has(b)) graph.set(b, [])

        graph.get(a).push([b, value]);
        graph.get(b).push([a, 1 / value])
    })


    const dfs = (src, dts, visited) => {
        if (!graph.has(src)) return -1;
        if (src == dts) return 1;
        visited(x)

        for (let [n, w] of graph) {
            if (!visited.has(n)) {
                const result = dfs(neighbor, dst, visited);
                if (result !== -1.0) {
                    return result * weight;
                }
            }
        }
    }


    return queries.map(([x, y]) => {
        if (!graph.has(x) || !graph.has(y)) return -1
        const visited = new Set();
        return dfs(x, y, visited)
    })
} 