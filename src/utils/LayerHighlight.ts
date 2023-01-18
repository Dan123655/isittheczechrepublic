export const ClickHighlight = (event: any) => {
        if (event.target.feature.properties.ADMIN !== "Czech Republic") {
            event.target.setStyle({ fillColor: "red" });
          } else {
            event.target.setStyle({
              fillColor: "lightgreen",
            });
    }
}
