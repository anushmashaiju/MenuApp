import "./CocktailSection.css";

function CocktailSection() {
  return (
    <section className="cocktail-section">
      <div className="cocktail-content">
        <img
          src="images\image 39 (1) 1.png"
          alt="Top Cocktail"
          className="cocktail-image-top"
        />
        <h2 className="cocktail-title">BRUNCH COCKTAILS</h2>

        <div className="cocktail-items">
          <span className="cocktail-item1">
            <span className="cocktail-name">CINNAMON TOAST CRUNCH ...................$16</span>

            <p className="cocktail-description">
              Skrewball peanut butter whiskey, vanilla extract,<p> Amaretto, Baileys,
                egg white, cinnamon</p>
            </p>
          </span>
          <span className="cocktail-item2">
            <span className="cocktail-name">MOET SPRITZ ...........................................$20</span>

            <p className="cocktail-description">
              Aperol, St Germain, botanical liquor, fresh lime juice,<p>mini brut
                Moet topper</p>
            </p>
          </span>
          <span className="cocktail-item3">
            <span className="cocktail-name">BAR 42 MARY .........................................$14</span>

            <p className="cocktail-description">
              Titos, tomato juice, worcestershire, celery salt, black <p>pepper, tabasco, fully loaded</p>
            </p>
          </span>
        </div>
        <img
          src="images\cocktail1 1.png"
          alt="Bottom Cocktail"
          className="cocktail-image-bottom"
        />
      </div>
    </section >
  );
}

export default CocktailSection;
