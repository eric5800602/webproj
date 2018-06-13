#include <bits/stdc++.h>
#include <time.h>
#include <windows.h>

using namespace std;
FILE *r, *w;
struct player {
    int id, x, y;
    player(int ID, int X, int Y) : id(ID), x(X), y(Y) {}
    player() {}
};
player data[1000];
int main() {
    int i = 0;
    int a, b, c, aa, bb, cc;
    while (cin >> aa >> bb >> cc) {
        r = fopen("in.txt", "r");
        while (~fscanf(r, "%d%d%d", &a, &b, &c)) {
            data[a] = player(a, b, c);
        }
        data[aa] = player(aa, bb, cc);
        w = fopen("in.txt", "w");
        for (int j = 0; j < 5; j++) {
            fprintf(w, "%d %d %d\n", data[j].id, data[j].x, data[j].y);
        }
        fclose(w);
        fclose(r);
    }

    return 0;
}