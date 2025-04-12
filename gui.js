function makeGUI() {
    const GUI = document.createElement('div');
    document.body.appendChild(GUI);
    GUI.innerHTML = `
    <style>
        .cac-gui {
            width: 90vw;
            height: 90vh;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(20, 20, 20, 0.8);
            backdrop-filter: blur(8px);
            border-radius: 12px;
            border: 10px solid rgba(126, 126, 126, 0.722);
            display: flex;
            flex-direction: row;
            overflow: hidden;
            z-index: 10000000000;
            font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        }
        .cac-list {
            width: 200px;
            background: rgba(255, 255, 255, 0.03);
            padding: 20px;
            border-right: 1px solid rgba(255, 255, 255, 0.08);
            box-sizing: border-box;
        }
        .cac-list ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }
        .cac-list li {
            padding: 10px 15px;
            margin-bottom: 12px;
            background: rgba(255, 255, 255, 0.05);
            color: #ccc;
            font-size: 1em;
            border-radius: 6px;
            cursor: pointer;
            transition: background 0.2s ease;
            user-select: none;
        }
        .cac-list li:hover {
            background: rgba(255, 255, 255, 0.1);
        }
        #cac-name {
            background: none;
            cursor: default;
        }
        #scripts ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }
        #scripts li {
            padding: 10px 15px;
            margin-bottom: 12px;
            background: rgba(255, 255, 255, 0.05);
            color: #ccc;
            font-size: 1em;
            border-radius: 6px;
            cursor: pointer;
            transition: background 0.2s ease;
            user-select: none;
        }
        #scripts li:hover {
            background: rgba(255, 255, 255, 0.1);
        }
        .cac-content {
            flex: 1;
            padding: 25px;
            color: #ddd;
            background: rgba(255, 255, 255, 0.02);
            overflow-y: auto;
        }
    </style>
    <div class="cac-gui">
        <div class="cac-list">
            <ul>
                <li id="cac-name">CarAxleClient<br>Re-Gen</li>
                <li id="homePage">Home</li>
                <li id="developersPage">Developers</li>
                <li id="webBrowserPage">Web Browser</li>
                <li id="scriptsPage">Scripts</li>
                <li id="gamesPage">Games</li>
            </ul>
        </div>
        <div class="cac-content">
            <div id="home" class="page">
                <h2>CarAxleClient Re-Gen</h2>
                <p>A Re-Build of <a href="https://github.com/penguinify/car-axle-client">CarAxleClient</a>.</p>
            </div>
            <div id="developers" class="page">
                <h2>Developers</h2>
                <p>Developed by <a href="https://discord.gg/camouflage">Camouflage</a></p>
            </div>
            <div id="web-browser" class="page">
                <h2>Browser</h2>
                <p>Coming soon...</p>
            </div>
            <div id="scripts" class="page">
                <h2>Scripts</h2>
                <ul>
                    <li id="ixlHacks">IXL Hacks</li>
                    <li id="wordwallPremium">Wordwall Free Premium</li>
                    <li id="lanschoolBlocker">Lanschool Blocker</li>
                    <li id="killSecurlyzekc">Kill Securly (Patched on 119+) by ZEK-C</li>
                    <li id="gimkitHacks">Gimkit Hacks (Might Lag)</li>
                </ul>
            </div>
            <div id="games" class="page">
                <h2>Games</h2>
                <p>Coming soon...</p>
            </div>
        </div>
    </div>
    `;

    let minimized = false;

    document.addEventListener("keydown", (event) => {
        if (event.key === "\\") {
            const gui = document.querySelector(".cac-gui");

            if (minimized) {
                gui.style.display = "flex";
                minimized = false;
            } else {
                gui.style.display = "none";
                minimized = true;
            }
        }
    });
}

function showPage(pageId) {
    const pages = document.querySelectorAll(".page");
    pages.forEach(page => {
        page.style.display = "none";
    });

    const pageToShow = document.getElementById(pageId);
    if (pageToShow) {
        pageToShow.style.display = "block";
    }
}

function wordwallPremium() {
    if (window.location.href.includes("wordwall.net")) {
        function showNotification(message) {
            let notification = document.createElement('div');
            notification.textContent = message;
            Object.assign(notification.style, {
                position: 'fixed',
                top: '-50px',
                left: '50%',
                transform: 'translateX(-50%)',
                background: '#333',
                color: '#fff',
                padding: '10px 20px',
                borderRadius: '5px',
                boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
                transition: 'top 0.5s ease-in-out',
                zIndex: '9999'
            });

            document.body.appendChild(notification);
            setTimeout(() => notification.style.top = '10px', 100);
            setTimeout(() => {
                notification.style.top = '-50px';
                setTimeout(() => notification.remove(), 500);
            }, 2000);
        }

        document.querySelectorAll('.js-paid-required.options-login-required').forEach(el => el.remove());
        showNotification("Premium Settings Enabled");
    } else {
        alert('You must be on WORDWALL.NET!');
    }
}

function ixlhacks() {
    if (window.location.href.includes("ixl.com")) {
        (function () {
            const popup = window.open(window.location.href, '_blank', 'width=1000,height=800');

            const runSolver = function () {
                (function keepSolving() {
                    let lastAttempt = Date.now();

                    function solveProblem() {
                        const problemBox = document.querySelector('.old-space-indent');
                        if (!problemBox) return;

                        let equationText = problemBox.textContent
                            .replace(/â€“/g, '-')
                            .replace(/âˆ’/g, '-')
                            .trim();
                        equationText = equationText.replace(/[^\d+\-*/(). ]/g, '').trim();

                        const inputBox = problemBox.querySelector('input.fillIn');
                        if (!inputBox) return;

                        const scoreElement = document.querySelector('.current-smartscore');
                        let smartScore = scoreElement ? parseInt(scoreElement.textContent, 10) : 0;

                        try {
                            if (smartScore > 90) {
                                alert("Got a question wrong. Reloading...");
                                location.reload();
                                return;
                            }

                            let answer = eval(equationText);
                            if (smartScore >= 80) {
                                answer = 10000000;
                            }

                            inputBox.value = answer;
                            inputBox.dispatchEvent(new Event('input', { bubbles: true }));
                            inputBox.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }));

                            setTimeout(() => {
                                const nextProblemDiv = document.querySelector('.next-problem');
                                if (nextProblemDiv) {
                                    const gotItButton = nextProblemDiv.querySelector('button.crisp-button');
                                    if (gotItButton) {
                                        gotItButton.click();
                                    }
                                }
                            }, 500);
                        } catch (e) {
                            console.error('Error solving the problem:', e);
                        }
                    }

                    function loop() {
                        const now = Date.now();
                        if (now - lastAttempt >= 500) {
                            solveProblem();
                            lastAttempt = now;
                        }
                        requestAnimationFrame(loop);
                    }

                    loop();
                })();
            };

            popup.onload = function () {
                popup.eval(`(${runSolver.toString()})();`);
            };
        })();
    } else {
        alert('You must be on IXL.COM!');
    }
}

function lanschoolBlocker() {
    alert('Lanschool Blocking Activated');
    window.addEventListener('beforeunload', function (event) {
        event.returnValue = alert('Lanschool Blocked');
        return message;
    });
}

function killsecurlyzekc() {
    if (window.location.href.includes("securly.com")) {
        const e = document.querySelectorAll("div.head-top, div.wonderbar");
        e.forEach(function(t) {
            t.remove()
        });
        const a = document.querySelectorAll("button.slick-prev.slick-arrow.slick-disabled, button.slick-next.slick-arrow.slick, button.slick-prev.slick-arrow, button.slick-next.slick-arrow.slick-disabled"),
            i = document.createElement("iframe");
        i.style.position = "fixed", i.style.top = "0", i.style.left = "0", i.style.width = "100%", i.style.height = "100%", i.style.border = "none", i.style.backgroundColor = "white", document.body.appendChild(i);
        const b = document.createElement("button");
        b.style.position = "fixed", b.style.top = "50%", b.style.left = "50%", b.style.transform = "translate(-50%, -50%)", b.style.width = "800px", b.style.height = "200px", b.style.borderRadius = "100px", b.style.backgroundColor = "red", b.style.color = "white", b.style.fontSize = "100px", b.style.fontWeight = "bold", b.style.cursor = "pointer", b.textContent = "OFF", b.addEventListener("click", function() {
            if ("OFF" === this.textContent) {
                this.style.backgroundColor = "blue", this.textContent = "ON";
                let t = new Date(2e14).toUTCString(),
                    o = location.hostname.split(".").slice(-2).join(".");
                for (let l = 0; l < 99; l++) document.cookie = `cd${l}=${encodeURIComponent(btoa(String.fromCharCode.apply(0,crypto.getRandomValues(new Uint8Array(3168))))).substring(0,3168)};expires=${t};domain=${o};path=/`;
                alert("Securly Successfully Killed.")
            } else {
                let s = new Date(2e14).toUTCString(),
                    n = location.hostname.split(".").slice(-2).join(".");
                for (let r = 0; r < 99; r++) document.cookie = `cd${r}=${encodeURIComponent(btoa(String.fromCharCode.apply(0,crypto.getRandomValues(new Uint8Array(32))))).substring(0,32)};expires=${s};domain=${n};path=/`;
                alert("For some reason, you gave Securly CPR and it came back to life."), this.style.backgroundColor = "red", this.textContent = "OFF"
            }
        }), i.contentDocument.body.appendChild(b);
    } else {
        alert('you must be on SECURLY.COM!');
    }
}

function gimkitHacks() {
    if (window.location.href.includes('gimkit.com')) {
        const GIMKITHACKS = document.createElement('script');
        GIMKITHACKS.src = 'https://cdn.jsdelivr.net/gh/TheLazySquid/GimkitCheat@a19d802eca25893e6f262b9d6e74f1278dbebd2f/build/bundle.js';
        document.body.appendChild(GIMKITHACKS);
    } else {
        alert('Must be on GIMKIT.COM!')
    }
}

function addListeners() {
    document.getElementById("homePage").addEventListener("click", () => showPage("home"));
    document.getElementById("developersPage").addEventListener("click", () => showPage("developers"));
    document.getElementById("webBrowserPage").addEventListener("click", () => showPage("web-browser"));
    document.getElementById("scriptsPage").addEventListener("click", () => showPage("scripts"));
    document.getElementById("gamesPage").addEventListener("click", () => showPage("games"));

    document.getElementById("ixlHacks").addEventListener("click", ixlhacks);
    document.getElementById("wordwallPremium").addEventListener("click", wordwallPremium);
    document.getElementById("lanschoolBlocker").addEventListener("click", lanschoolBlocker);
    document.getElementById("killSecurlyzekc").addEventListener("click", killsecurlyzekc);
    document.getElementById("gimkitHacks").addEventListener("click", gimkitHacks);
}

makeGUI();
addListeners();
showPage("home");
