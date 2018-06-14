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
    while (1) {
        Sleep(100);
        r = fopen("in.txt", "r");
        int id, type, x, y;
        system("cls");
        while (~fscanf(r, "%d%d%d%d", &id, &type, &x, &y)) {
            prnintf("%d %d %d %d\n", id, type, x, y;)
        }

        // fclose(w);
        fclose(r);
    }

    return 0;
}