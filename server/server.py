from flask import Flask, render_template

app = Flask(
        __name__,
        static_folder="../client/dist",
        template_folder="../client"
    )

@app.route("/")
def index():
    return render_template("index.html")

if __name__ == "__main__":
    app.run(
        port=5000,
        debug=True,
        host="0.0.0.0"
    )
