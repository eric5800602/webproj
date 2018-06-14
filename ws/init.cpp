#include <bits/stdc++.h>
#include <time.h>
#include <windows.h>

using namespace std;
FILE *r, *w;
struct player {
    int id, type, x, y;
    player(int ID, int TYPE, int X, int Y) : id(ID), type(TYPE), x(X), y(Y) {}
    player() {}
};
player data[1000];
int main() {
    int i = 0;
    int a, b, c, d, id, type, x, y;
    while (1) {
        r = fopen("in.txt", "r");
        while (~fscanf(r, "%d%d%d%d", &a, &b, &c, &d)) {
            data[a] = player(a, b, c, d);
        }
        data[aa] = player(id, type, x, y);
        w = fopen("in.txt", "w");
        for (int j = 0; j < 50; j++) {
            fprintf(w, "%d %d %d %d\n", data[j].id, data[j].type, data[j].x,
                    data[j].y);
        }
        fclose(w);
        fclose(r);
        Sleep(100);
    }

    return 0;
}