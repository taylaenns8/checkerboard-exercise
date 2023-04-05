
for (i = 0; i < 4; i++) {

    const container = document.createElement("div");
    container.style.display = "flex";
    container.style.flexwrap = "wrap";
    container.style.width = "800px";
    container.style.height = "100px";

    for (let i = 0; i < 8; i++) {
        const tile = document.createElement("div");
        tile.style.width = "12.5%";
        tile.style.paddingBottom = "12.5%";
        tile.style.float = "left";
        
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        
        tile.style.background = `rgb(${r}, ${g}, ${b})`;
        
        container.append(tile);
    }


    const container2 = document.createElement("div");
    container2.style.display = "flex";
    container2.style.flexwrap = "wrap";
    container2.style.width = "800px";
    container2.style.height = "100px";


    for (let i = 0; i < 8; i++) {
        const tile = document.createElement("div");
        tile.style.width = "12.5%";
        tile.style.paddingBottom = "12.5%";
        tile.style.float = "left";
        
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        
        tile.style.background = `rgb(${r}, ${g}, ${b})`;
        
        container2.append(tile);
    }


    document.body.append(container);

    document.body.append(container2);

}
