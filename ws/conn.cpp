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
    while (1) {
        Sleep(34);
        r = fopen("in.txt", "r");
        int a, b, c;
        system("cls");
        while (~fscanf(r, "%d%d%d", &a, &b, &c)) {
            cout << a << " " << b << " " << c << endl;
        }

        // fclose(w);
        fclose(r);
    }

    return 0;
}