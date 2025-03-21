import React from "react";
import { Button, Link } from "../../components";
import { Routes } from "../../utils";
import SignInModal from "./sign-in-modal";
import { useAuth } from "../../context";

export default function HeaderView() {
  const { isLoggedIn, logout } = useAuth();
  return (
    <header className="absolute top-0 right-0 left-0 z-10 my-3 md:my-6 px-4 md:px-12 lg:px-[7.5rem]">
      <section>
        <div className="flex items-center justify-between">
          <Link to={Routes.index}>
            <img
              className="max-w-[11rem] md:max-w-[unset]"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOcAAAAZCAYAAADKbDlJAAAACXBIWXMAAAsTAAALEwEAmpwYAAATE0lEQVR4nO2ceZRcdZXHP/dVdVfvnaQ73Z2GDgnRkBCWIBjQQUlCEGSdSALiqICiHFcGN1QYCTguA4KggjIuA8fR44GEgCwBsgDCIMKwgwMGSExn6fTe6a6qrup6v+/8Ud1Jdb3XS6WReI75nvPOqfq9e+/ve3/1u+93f8sr2I/92EeQdICTlH9Jmrevub1dcNJfQvy/SBLRfU3u7w2+r8vyyzyP/zGzx/cFHwDf15fNdOzQd0l/jkQiK0aSz2R0vufptBz5nZFI5At/Y5p7BTkFysyzfcBk3yDMfycjEmHk4NQK5gPLgSVAE1ALtAPNwFo87rBv8cKYtW9aPh/TcowlKMeO0Yy0Fufu4ODVY9pZ+FDffHlaDrbEcvgImk1aaxG74+HFFWPzGQOS+35+WSbD1cA+C05Jp0pavKfEHhldwy12juU5BW8Cf5/BqWDnTKf/cYLTOWEBdx0QCQanVjAbuAY4K8TWtMFrAY7LtYLVRLjM/o2NAck3zp1N1L8GKWtHeXbENLAFeJHL2bxsNb4uY9aqgJ0T1+2a7WPXAGcZAS+mGUzDbIEcly9c17vaOXfZHz5QHeQzToR1lnzybzckTR3OYXQ+kppyvwd//L8fhLd3+m3nse/gkIb/QBJEIuANK1zBKcBThAdmGJbi84xWcOaw0k3LTyHiP4UKsBOxZ9iyfJidhev6TvHxngIbpx1b6nmRZxZtiJ85tmw4nBS83N5amzgkVTu5Q3L5hHfoLHqlOictyJX39yH/0ZBMhrf3PxKcgm2QHTlz0lpdxWmIu4FIgfYrgTt1FWfYlaxh8/LTQHtnx+lONi87gxkr1yxaGz9Ne2lHTneesD5+xqMnlq8pUDe042sCI6ek8nQ6/UHJFmNqQjYJUw+yFnn8IVNUtKbSrC1Pp3hgYGC+pINSAwMXI4qH82F6KjWQPzeOSWoinfmgUHke/0m58pLiJSXFPwnjm0inj4vIThYcjlSLhy+x08NeMtOa4uLi58P0+vv7Z5tFluZWW1wc/YGZOUmRVCp1msyO8bADHZSXxorPhSRScGZlOTYxuwiYi6zKjM2gh4qLi283s4EwHrlIp9PvkuwUwVGYarO+0+phz5npgXxf+vsHTjHjyAAf09ri4uJnc8uSyeQMz4ueG6zVbYrFYrcPfUuk08d60tngHQKuyLAdoAeLi4vvMrN0WH9zBkVD7TCYyj4NVI3l8Cjo+dIxRy374WGzVk3Uzuy285ZN6zl5lU3QjmeZozecOOmNQpSS/amw6Ly6tDR2ZSF2JFkylfpXg2+C1Y4imkDcWFJSfJWZpQBSqdShTrxSSH2FwXaWlhQ3DCORTi8w6UbEcWPorvVMl8Risf8bpp9KLTVxZ26ZZ8zNZDI9kUj0XsG7cm650pJYJJFIHGBeZGt+DZ5xmC+dbNi15GV3g/iLZ5wdi8VeDmOYSqXmOumnYCeM4cs6w322pKRkI0B/f/8sYc8DFXmCr5fEio8wsyRkf9v+1MA6yF0HAMCX895fVlb0hKSy/v70f2GcE1az4AWTOwvz1gLvHH7TPlVSUvSLIcevZWKBAFA96/BPTzQwAao/U3PcRAMToNqn6JpClULTWgrLCyVFE6nUSonrnagNtbnnKnPoG8n+1AOSKiA74xpDZ4LXcH8SidSH5bs/OKfjxqF7UkZ6IplMvm+YET/IecC5d+NFbvWld42UuobVkXEsk7jOSd4IPGZnHI8kEolhc2uA3mRyccbpKSdOGIcvS3zxdDKZPB6gpKTkDSd3aYjsO5Kp1FW726u//5NObnGIve8NBqaX6E/d7dA5I9Ut6UgHdzgpGuxvPgCeruYoYK/naEN4bc5CPjv94qqjimdOyM777J+4ZGZj1Tsrwx6YhcGkpYs29AXSlNGgwTld7lXonDOeTF4npw+F2RrpctLCeKL/x6PxeCuvISQSiWMd7lZJsXHrO03yxcq+vr76PV77wTocH5X0gdHqD6/DfWNsHq7Ghx+Tg2QyOdNkKyVVFNAW1b5YFY/HGwHKS0t/4eR+H+wDujQejx8dj8cbJbs2xM7/lpWUXJ1t09RFkpaMXTfvljQzpN0A8HAsK6zrhaP93RdiGB8pP35Cds4v+SAGnNjwlmzBGk5nF6IQ3pHGH529vb2HSXw+pENvFPqiL3e6k/u0pGcDMuiCeDx+NOm3LziduDEkMJPO6XqhZULnSvxc2f3xXJk6mXfFkJ1MWNsRHphjB6diyuI5Sb+XtC3UhjijO5ncPRoMSFdJbnKIbEbiZUkvZj8H7tc59viC739KUmueTNRhv3TYzZKblHcv4TL20aF5sMO/ZAS/+oQ2CK2X1DdS2/g5C0JLCum8I2FKQ3aP/PjYnAnZeU/ZdAAOry50HSgcgpOAb41bPmRTuJDlIOFdglP+sP/nRLxsQUODxXfLSbfu6kv8yeCoXEEfLk7Eiy+tqIiflJWzYwX/nmfvBc/0lbD6nbOZGP+ZV7zDM318T92RNMCuXYn3OrfncMOQCc90ZmVFxbqcstt39SVeRbouT/YCSV81s34yIBuzpdJAnJynXVh7A/2I5VVV5fdm+SrW25u4BeP8PDkv4nQK8NPu7u7J+DovxNpLmah3+pTS0i0AiUTiwIyv+4HDh4vpwu3SVxrNEpWVla27dsUvwvh9nq0jB69hMPhqVVXJawBdXckZcu7QkF7ziuEWVVZWtgH09vZOFd464IgA40HVKHBQ0J/CcUDJgQDMLmqckJ3pJSUANJW9NZtzwqYXIh+2lK+QshH1nU7O34418f3cwAQws4Gunr4bzLgtT3rRoOw6gJ6eeCyk03dWVQ4Lnj03+voO9wIDvZJVlZUBeV/+ySF7x4+E2a4sL72ppy/+bURZTnFFV2/vu4HHfMDC2yllpi9FPW91WVlZi9keZxJANFznpklVFfcOfTGzVFtb2xeKYqWnAzV5skcDKBJZ5MKWfp1dMKUyG5gAZWVlW7v7+i7Fke9jSVlP/HjgIYCqqvJ7unf1/hzsU2EEc7CmurL8p7u5RjPHOAX7rskuq6qu3L0qX1lZ2dbd23spsvVBk1n9KDB5jMrHhTLLBlWllU7ITmkkS6w0+pbtnI+2UhpAIYGYj66urklCTSFD7We6eno/HqJSFaxPsyQVDaVIPhksfyAeo2nG7YM4QgGymtXV07s2X7R7Vx+E5PeemAM8BhnyN9MBzOz66srKmwvhKtNd+WVTp07t7erufQzjn/NqqAeQrzkh7bJ98qSKZ/MLJ1VUrO/q6e0gP9DN5jIYnADp/uSXimKli4B3jEC/fSBin8h94DhHvQU7gKuuKg+06aTKyg1dPb195K0Om+1JazvInvqZEOIuSXWkgl4lJ2Qn4Tsqox7JzFuzGW3QNrbUHoR2lnF2ds/zav0wfXjPCLWFFVpfX99koHXE+kejkwZ54+MrU22IrYNA486mBFMA8MPTWl+2YUTlBCgass83EN0UJu6MzYHR2VQNYEZNSDttHpG33BawmryyYQ/yurq6vvbuvs94uEBgDVZ+eV1FRUue4eqAR2KnmYUee5K0GTgst2wo04+SPSs74eDc2r+V6vI5vDawfUJ2tiT7mVdZxpbEW3VSRM2FSIemtePUzWS8mII5ZcFIpaJFQ599Hyyv0xsadUIe4kOovHOK7SXFXBQB2cX/kLbzxM7RlMPa24+mS8Jk5VxRsOObD+CH+zLiSOGgP5+vKcSGMue5EVMVnS/pl2ZZDoN2MyHtUJxfsFteCtwz25PWPgQsGEl5vOhueRJmzeHx1KsTsvPH5BbmVc7hpW5/bOHxQDxYkHjYKDnuVDfdo5C4MWOlROd4OUQjqT0LR9nDl8PpQPVIulLKKRiLofIOdYcMdi8CT46Xq7DBtNEPTWsHvEw8ULgbCcKmiR6aDgQOj0g0hTwqewZvdof8SjNGqlnOzQiZH3TkftnZ0X22xCdGeTy/t6Or58tkz6IP2d0VIlezffv2ssbGxsQwDpLX3tUTWBMZWiSLAquAK/IFCkXt07eiWefz2/hjE7JzW3INn2QO63dmJkoJQBGzO8cWy1GYwMjZOWVKW1Vnd9rynpQO3V0/Zcp/F8JjCOa7/sDaLxzc0tJS3tDQEOj4mUik3/wA4+qOjo6mmpqa4VmE07bAjBPa62smX1woz7ARPovRJ8ihD0Onk4GH8+SK2zq7g6eXxDYA51xLyAn/Ge3t7XNra2uHnWZq6ew8XKIh/5d1pm1Dn9vb2w9w6JaxnssSV+/o6LhvWk3N4IkutzXsIRWNxd4PPJBb1tHRs1CmQJYwtEgXtRU8rxWsBpbmCxWCQ157lJuaf9b9vNs8aSJ2HucJbth8TvfrvZMmZAfAsJXrl5S/WIjOCPPLZTvbu+aOqmfu+gazJ3e2dz4r8o7Aia83Nzevampq2p1mbdq0qaSsono1xtQ81pvrayfv3nuW6A7hVGnR4nUt7Z33mOjAbGd97eS7AAY8r7soE3iwWQZb09Le9TtDHWB99bWTfy2nJzEuyJNduKOta+G0qZMfyS1s6ei41GT/EvDb48KGKVNeynINabvUXgQnfHFHW9cDQxwkRXZ2dP3AoC6gb+45AJP3x5CTXBGHd1Nra+uZdXV1fQBtbW2VTvxEIRGUQY8O1ue1dnTfipS/MuyAASA3/Y15stskvcfMBsy551zoiUP7QUtL77MNDZWtAB0dHQcOyN0U9jxzOQtCEOEyfBYzSro0DnS//vLPzubQ2XdO1M5NnU+c3cSpE7YTIfL1QpVGeCviUNChoytyO4Av3W75wQnzoiVlz2xv67zBM/c68uqFLnHo2OCwrPtyv0Ui7o20QwSHoOOA4wQgPQXcBXBgVVXHjraOLoKr8PNA385Wp53Ar02Zu328G8FyO5sHum97a/uPDO8xIWeenSqnz4nAGL6pYfKUVwB8fCxkxBjtnFeSEbdSSkHrd7R1vAxsbWnvnA80hkj6GbQGoLa2+vmW9s43gYPzZBZhkU072jqfAMig9+IUWMGX8cQBg5lFS3vnpYTs/8v4sYd2SvbdvFtHt7R3fgO4ura2dtuOtvbnwI7Kk5lHJP3GjraOp4DitONoUGlorjFY6AEMvo/5EQbn9XsBHzjvhlNf3ACamB3ZeW8cfc4G82zCfNYtKXmzUEU57dU1hCLcL3DaHiIzF+ducT7rnXO/ldOxITKt6aLIDbl8ampqdsnpqfHWP+jD+vHI19XVtcjnlpD7ZYivS+4+pDXy3Rfk5AXkfHeFDa37++FtB6lC2zsjJ3+wviPkdKqcGkfw496m2tptAGbmO5/vjiBXK+fOzF6qDbkvG3BXAGzdufNIOX0nRGZz1PlX1NfUXCvH8yH3r9jW2noUgHy7eQQeFXJaLKfj5VQ6WNaTL+cGe/3uB5ut4H6M04DuAvtzL8ZSWzGYT89YdT/SXtrRUmbe8QDAw4vL7zftHR+ZLX1kScUDY4sGsbfH4Xw/26JTp07tle8+LClZoI2E73TuQZMmdYXQ+o/RdAOrjo5rFDxuF3p8LpXsvcxJTxfsM+7mxoapvx2r7Qpub6c3cfr5ODj0ZfC/nGursX7KryT9rlBfnNy3pk2b+nBzc3OpyfuNQs4Zg11cV1fXZ2YZfPdJBY8BFpnzbtu4cWNsWv2UX8np8THrdnoOpx8F68o+74ZlHXYlDxLhGOBOxl4HEbASmG9Xcs+wOzNXPYgXKcyOaT4HrRpm5+GTKh70LHOMsos647BjK6NE5z96Yvk9Y8iOiL190yMXjY11j2Uc73PSq+PT5xUnW9Q0beojYZwa62tX+3Kfc1JPmL6f95bJtGm1T0s610mtI7wRsVt25syZ/VH8Rb50m5PcOPjGndzXGuumfj63Tt/3Q+X7R2vssJet0cZ4sXeZkx4d5W2STt/ptOn19cNWdM1MjfW1H/OdvuekgXH40uNLFx7YUJc9HhmNXeOkecH21W2N9TW7Dyc0Nk591knXhfwOh8fKq680M5fuj54xug96Feed5dCLATtD/ozUbrqaIwcPxS8BprPnP4S2AGuBlbaCsRdb3lx6JF5kGdgSskvkg3ZsC2gtTis5eNWYdhZt6DtS0jLEksEjebVAu6EtBms9bOX6JRUFLf6EoXnHzsB/CI0Lpt80NTS8lFskydu6o3WpxOkYC4B6sqdSuoBtwLNIq5oa6+83szGXp9va2ioTvn+CyeZYzsknYc3Tp9XdlC+/cePGWKy86gTgMFCtmXmDvPqmNzbkn9flrzt2HGqyjxp2gowZiBogA9Yp3EsG69Iev3lHQ0NriO48D+9jAdKZ9DVNTU2h20gbOzqqStKZbw4rFH9qaqxfvWnTppJISdmFiAvIntCJAW8aui/l8cMwDrnYtm1bk/Oin3CyE8x0CGIK4MA6TLzgjLXpWOTWd9bU7AL461+7J3tF/V/bvck4hg/Nzc2lisQuNxu+FySZHyXzncbGxoQk27qj9UMyWw6ai6xIuE2G3WN++rampqZkc3P7AUT9Yf/vJNyqpoaGp208qcd+7Md+vP2Y+EuT+7Ef+/E3wf8D6C2FlpDSLWAAAAAASUVORK5CYII="
              alt="logo"
            />
          </Link>

          <div>
            {isLoggedIn ? (
              <Button
                variant={{ color: "secondary" }}
                className={"text-red-500"}
                onPress={() => {
                  logout();
                }}
              >
                Sign Out
              </Button>
            ) : (
              <SignInModal />
            )}
          </div>
        </div>
      </section>
    </header>
  );
}
