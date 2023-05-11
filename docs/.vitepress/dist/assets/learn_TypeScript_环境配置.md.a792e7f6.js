import{_ as A,c as s,o as a,d as e}from"./app.6e7d5abf.js";const v=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4ECB\u7ECD","slug":"\u4ECB\u7ECD","link":"#\u4ECB\u7ECD","children":[]},{"level":2,"title":"\u5B89\u88C5\u73AF\u5883","slug":"\u5B89\u88C5\u73AF\u5883","link":"#\u5B89\u88C5\u73AF\u5883","children":[{"level":3,"title":"node","slug":"node","link":"#node","children":[]},{"level":3,"title":"\u5168\u5C40\u5B89\u88C5 TS","slug":"\u5168\u5C40\u5B89\u88C5-ts","link":"#\u5168\u5C40\u5B89\u88C5-ts","children":[]},{"level":3,"title":"\u9879\u76EE\u5B89\u88C5 TS","slug":"\u9879\u76EE\u5B89\u88C5-ts","link":"#\u9879\u76EE\u5B89\u88C5-ts","children":[]}]},{"level":2,"title":"\u7F16\u8F91\u5668","slug":"\u7F16\u8F91\u5668","link":"#\u7F16\u8F91\u5668","children":[{"level":3,"title":"\u5173\u95ED JS \u7684\u68C0\u9A8C","slug":"\u5173\u95ED-js-\u7684\u68C0\u9A8C","link":"#\u5173\u95ED-js-\u7684\u68C0\u9A8C","children":[]}]},{"level":2,"title":"\u7F16\u8BD1 TS","slug":"\u7F16\u8BD1-ts","link":"#\u7F16\u8BD1-ts","children":[]},{"level":2,"title":"\u5E38\u89C1\u95EE\u9898","slug":"\u5E38\u89C1\u95EE\u9898","link":"#\u5E38\u89C1\u95EE\u9898","children":[{"level":3,"title":"windows","slug":"windows","link":"#windows","children":[]}]}],"relativePath":"learn/TypeScript/\u73AF\u5883\u914D\u7F6E.md"}'),t={name:"learn/TypeScript/\u73AF\u5883\u914D\u7F6E.md"},n=e(`<h2 id="\u4ECB\u7ECD" tabindex="-1">\u4ECB\u7ECD <a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a></h2><p>typescript \u662F javascript \u7684\u4E00\u4E2A\u8D85\u96C6\uFF0Ctypescript \u53EF\u4EE5\u8FD0\u884C\u4E8E\u4EFB\u4F55\u7CFB\u7EDF\uFF0C\u5E76\u4E14\u662F\u5F00\u6E90\u514D\u8D39\u7684\u3002</p><p><img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAEsAj0DASIAAhEBAxEB/8QAHAABAQACAwEBAAAAAAAAAAAAAAYFBwEDCAQC/8QASxABAAEDAgIFBwgGBwUJAAAAAAECAwQFEQYSBxMhMUEVUVNhcZKxFCIyNHOBkaE2UnJ0s9EWIzM3YnXBFyQ1VbJCQ2SClMLh8PH/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAgQFAQMG/8QALhEBAAIBAgQFAwQDAQEAAAAAAAECAwQREiExUQUTFDOBQWHBNEJxkSJS8CMy/9oADAMBAAIRAxEAPwDVIDcZQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPr07EozMmbVdVVMRTNW9LK+Qcf0138nrTBe8bwr5NTjx24bSnxQeQcf0138jyDj+mu/kn6XJ2efrsPdPig8g4/prv5HkHH9Nd/I9Lk7HrsPdPig8g4/prv5HkHH9Nd/I9Lk7HrsPdPig8g4/prv5HkHH9Nd/I9Lk7HrsPdPig8g4/prv5HkHH9Nd/I9Lk7HrsPdPig8g4/prv5HkHH9Nd/I9Lk7HrsPdPjPzoOPETPW3e71MA88mK2P8A+ntiz0y78H0AHm9gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGS0P6/V9nPxhRpzQ/r9X2c/GFG0tL7bE1/vfAAsqYAAAAAAAAADir6M+yUX4LSr6M+yUX4KOs/a1PDelvgAUmmAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyWh/X6vs5+MKNOaH9fq+zn4wo2lpfbYmv8Ae+ABZUwAAAAAAAAAHFX0Z9kovwWlX0Z9kovwUdZ+1qeG9LfAApNMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABktD+v1fZz8YUac0P6/V9nPxhRtLS+2xNf73wALKmDnafNP4HLPmn8DeDaXA55Z80/gbT5pN4NpcDnb1OAAd/yPKmnmjFv8vn6qrb4OTMR1disz0dA5mJiZieyY74nwcOuOKvoz7JRfgtKvoz7JRfgo6z9rU8N6W+ABSaYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADJaH9fq+zn4wo05of1+r7OfjCjaWl9tia/3vgZ7guIq4z0qKoiY6/un9mWBd2LlX8LJt5ONdqtXrc70V099MvbLWb0msfWFbFeKZK2n6S9KxZtbf2dHuw56q16Oj3Yef/wCmXEf/ADnL96P5Kzo74h1jU+J5x87Ub+RZ+T11clyreN4mnafzfPZfDMuOk3m0cn0mHxTFlvFIrPNtTqbXo6Pdg6qz6Oj3YcX5mnHuzE7TFMzE/c0B/TLiPb/jOX70fyeGl0l9TvwztssavWU023FG+7cfGVm3HB2rTTboifk1XbEQ0Vp+n5Gq6jYwcWnmv364ppie6PXPqiO19uTxTruZjXMfI1XJu2blPLXRVVG1UeaexR9FVmi7xTeuVxvVaxapo9UzVTE/k18OK+i097TO89WLmy012opWsbR0bD4d4M0rh/HommzRfy9vn5NymJqmfV+rHsUTpzLtePhX71ujnrt26qqaf1piJmIefbvFGu38ucurVsuLszzfMuzTTHqimOzZl4NNl1k2tNundr6jU4tFWtYr17N4a3wzpWv49VvMxqOsmPm36IiLlE+eJ/0nsaM4g0LJ4e1a5g5PztvnW7kRtFyie6Y/+96xjpVzKdBt2Yxqa9Ujemq/VtybeFXLHfPq7vggs3OytSy68rMv1379c71V1zvP/wAR6mn4fg1GGZi8/wCP/dGT4jqNNmiJxx/l/wB1fNV9GfZKL8FpV9GfZKL8HvrP2o+G9LfAApNMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABktD+v1fZz8YUac0P6/V9nPxhRtLS+2xNf73wALKmLbot/S+f3W58aUStui39L5/dbnxpVtb+nv/C1of1FP5blyfqt39ir4PMkdz03k/Vbv7FXweZI7mb4N0v8AH5afjfWnz+BRcE63b0Liaxk36uXHuRNm7V+rTVt2/dMQnRsZMcZKTS3SWLiyTjvF69Yenqaqa6YqpmJie2JieyUTxB0aabqt25k4Nc4OTXM1TFMb26p9dPh934IfhfpA1DQLdGJkUfLMGnspoqq2rtx/hnzeqfybS0Xi/Rde2pxcumm/P/cXfmV/h4/du+bvg1OjtxV6d4/L6emo02tpw369p/DTOucJavw/M1ZmNzWN9oyLXzrc+2fD79mDenq7dF2iqiumKqKo2qpqjeJjzS070hcHWdFro1PT6OTDvV8ty1Hdarnu2/wz5vCWjovEvNtGPJG0s3XeGeVWcmOd4QVX0Z9kovwWlX0Z9kovwWNZ+15+G9LfAApNMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABktD+v1fZz8YUac0P6/V9nPxhRtLS+2xNf73wALKmLbot/S+f3W58aUStui39L5/dbnxpVtb+nv/C1of1FP5blyfqt39ir4PMkdz03k/Vbv7FXweZI7mb4N0v8flp+N9afP4H1afp2ZqmVTjYONcv3p/7NEb7euZ8I9cvlbV6MOIMKMSdGu0WrGXFU1W64iIm/HmmfGqPh7Glq818OKb0jdl6TDTNlil7bIXiDhfUeG6seM6iiab1G9Ndud6Yq8aZnzwwsTMTExO0xO8THg9K5+Bianh14ubYov2K/pUVxv/8Ak+tI19FnD1V7nivNop3/ALOL0bfjMbs/B4tTh2yxz+zS1HhF+LfDPL7vx0Za3n6rpWVYzbtV75LXTTbu19tUxMb7TPjtt+bL8eWqLvBOqRXEfNtRXG/hMVRMMtpek4Wi4VOJgWKbNmJ32jtmZ88zPfKN6UNfs42j+R7VcTk5UxNymJ+hbid+32zEfmz6T52ri2ONo33aV98GjmuWd522aer+jV7JRfgtKvoz7JRfg29Z+1jeHdLfAApNMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABktD+v1fZz8YUaY0rItYuZNy9Vy08kxvtv29jM+V8H00+5LQ0161ptMsjW4r2y71iZfcPh8r4Ppp9yTyvg+mn3Je/m07wqeRl/1n+n3Mzwzr9fDeqzn28em/VNqq3yVVcsdu3bvt6kx5XwfTT7knlfB9NPuSje2K9ZraY2lKmPNS0WrWd4+zatzpbyrluqjyRZjmiY36+f5NcPh8sYPpp9yTyvg+mn3JeeGmnw7+XtG/3eua2pz7eZEzt9n3OaappqiqmqYqid4mJ2mJfB5XwfTT7knljB9NPuS9vNp3h4eRl/1n+mwtH6TNb023TZyot59qnsibszTXEftR3/AHwoKel6xy/O0a7v6r8bfBp3yxg+mn3JPK+D6afclTvpNHed5iP7XaarXUjaN/6bN1TpV1PKt1W9PxLWHE9nWVT1lcezuiPwlCX8i9lX679+7Xdu3J5q6653mqfXLG+WMH00+5J5YwfTT7kvbDTT4fb2h45rarNP/pEz8Ptq+jPslF+CmnV8KaZjrp7v1JTLx1dq222la0FLU4uKNugAqNEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGQxtB1jNx6cjF0rOv2at+W5ax66qZ8OyYjZ3f0X4g/5Hqf/AKSv+SPFHd3aWJGVnhjX4jedD1KIj/wlf8mKdiYno5tMADoAAAAA7sTDys/Ipx8PGvZF6rut2bc11T90ODpGTz+Hdb0uz12oaPn4tr0l7Hqpp/GY2YwiYnoTEx1AHQAAH6qtXKKKK6rddNFcTNFU0zEVbdk7T4vy4ADoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA2Rwt0u5XC/DuLo9rR7ORRj821yq/VTNXNVNXdEetuLhLi27xJwZXrtzDosV09d/VU3Jqj5m/jt47PKr0P0W/3RXvblf6qWpxUiOKI57rOC9pnaU5jdOGraldoxMXhm3ev345aLdvIqqqqmY7ojl7WqdS0fU9Irt06lp+Vh1XYmaIv2po5ojv237+98+Bl39Py8XMxq5ov49dF23VHhVTtMN9dIuPZ416LMXiHDp3rxqKcumI7ZimY2u0/d/wC16Tw4bRERylDnkid55w0hp2gaxq9qu7pulZmZboq5Kq7Fma4irv2mY8X4wtG1PUcu7iYWn5OTk2Ymblqzbmqqjadp3iO7t7G+bNX+zXoapuTtRqFy1zRHjORd7vdj/pRfQRMzxjqMzMzPyCZmZ8f6yg86Zra0Ryg8qItFe6GxeEOI867et42h59yuxVyXYizMclXmnfx9THZ2n5umZVWNn4l/Fv09s271uaKvbtLdPHnSzqPD3FN7SNJw8SbeLy9dXfpmqa65iKpiNpjaO2O3tndlOLKMPj/oj8v/ACaLWVZx5yrUz2zbqonaunfxidpj8JcjPeNptHKXZxVneKzzh56iJqqimmJmZnaIiN5mWdjgjimcX5THD2pdVtvv1E77ezv/ACbD6DOHsXLydQ1zIt03LuLXTZx+aN+SqY3qq9u20fisvl3SV/SyLnkfB8h9fydX1tHP1W+3Pzc2/Nt27fdsZM8xaa1+ncphia7z9Xm2qmaa5pqiaaonaYmNpiV7mall8K9H+gWtFuV4lzWLd3IzMy12XLk01csW4q74iI8I/mz/AE6aFi4eo6drGPbpt3czntX+WNueqnaYqn17TMfdCG0fi6vA0uNH1PTcXVtJiublGPkTNNVqqe+bdcdtO6cW8ysWiPhHbgtNZcaJxvruj59u95RycnHmqIv4uTdqu27tE/SpmmqZ7437WP4ir0q5xBm3NEiuNNruc9imujlmmJjeadp8IneI9TPU2OA9ZqiizkanoGRXO0fKdsnHifXVG1UR65YDiDQ8zhvV7+m50UTetRFUVW6t6LlMxvTVTPmlKvDxdpRtvt3h82Fp+bqV/qMHDyMq9tvyWLVVdX4RDnP0zUNLuxa1DBycS5MbxTkWqrcz7N4WfFmpZXCVrE4V0e/cwrdnGtXs67Yq5LmTfrp5pmqqO3liJiIhjtH4uruYOZpHEmRk52l5Firq+snrbmPeiPmV0TM7x29kxvttJF7THFEcjhrE7TPNL2Me9lXos49m5euzEzFFumaqp2jeeyH7nCy6cOnNqxb0YtVXJTfm3MUVVeaKu6Z7FX0U8v8AtE03rI3p6u9zR546qrdh9e4n1PiC/MZWRXGHRV/u+HRPLZsUx2UxTTHZ2R2b97vFPFww5tHDvLq1DU9Xy9G0vDzqrk4GLTXGFFVqKadpn521W3zu3s8dmOjHvTj1ZEWbk2KaooquxTPLFU90TPdv6lbxR+gPBH7vlfxmR4W1SNG6MNazqLNu5lW9Ss/JarlPNFq7NG0V7T2TMRNUxv47I8e1d4j6/lLh3ttMpCvhzXKMP5ZXo2o04u2/XTi1xRt599mNpiapiKYmZmdoiO3dmrHGHEmPnxm29d1D5RvvzV5FVUT7aZnaY9W2zKcaWbF6zofEuHYoxZ1fHqu3rVrsppv26+WuqmPCJnaUuK0TET9UdomN4fVd4VzI6NMa9GhZXlSdWrprqjFq63qurjaJ7N+Xf7t0VfsXsW/XYyLVyzeonaq3cpmmqmfXE9sL+/xFrcdFGHl+WdR+U1azdtze+VV880xaieWat99t+3ZA5GTfy8ivIyb1y/fuTvXcu1zVVVPnmZ7Zcx8XPd2+3LZ1APVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeh+i3+6K97cr/V54fqLtymnlpuVxHmiqYh5ZcfmV23Tx34J3fin6FPshvHoM1ucrT9S4eyKestWf8AeLfNG9PLX2VUz9/bt65aPegejbAscF9G2XxFqFHJcybc5de/ZPV0x/V0/f3/APmeepmPL2Twb8e6T6b+Ivluv4+h2K97OBT1l2Insm7VHd91O3vS/PQP+mGo/wCXz/Eoa11DOv6nqOTn5VXNfybtV25P+KZ3bK6CP0v1H/L5/iUF6cGCalLcWWJV/F/RVi8XcR39VwdYoxrtU00Zdvq+s2qiIjeNpjadtuyfa/HHmqaTwP0cxwng5EXMu7j/ACai3zRNcUTPz7le3dvvP3z2dzWXSPk5GL0la5Vj37tmartO8265p3/q6e/ZHVVVV1TVVVNVUzvMzO8yjTDNorNp5QlfJETMRHNtLoZ4uwtE1DM0nUb1Nizm1U12btc7UxciNuWZ8N422nzx61zkcAcQ3+Iq8ujjfUrej3Ls3Zs0Xq4rppmd+SmrfbbwifN4PObvjNy4sdRGVkRZ7uri7Vy/hvslfBM2m1Z23Rrl2rtMLbpQv6dRqmPpuna7qeqxjxVVerysvr6Ldc7RFNE7d+2+/f4Q6qeG8Xi3h/TsjhqjGo1fFsdTn6dzxRcvVRPZeo3n528d6HImaaoqiZiY7pjvh6Rj2rERPRCbxMzMwqsXo34qyLs0X9LuYNmP7TJzKqbVu3HjMzM93sfnj/VcLVeIaKNPvdfiYWHawrd/bbreSNpq9m8zt7E7ey8nIpim9kXrtMd0XLlVUfhMul2KzvvaXJtG20Nga7peTx3YxOIdCo+V5kY1uxqOFbqjrrVyiOXninvqpqjbthj8Pg+rSMPJ1Pi3Hu4WLRZrjGxa6+S/k3pjamKad94pie2ZlI27ldquK7ddVFcd1VMzEx98Obt67fudZeuV3K/1q6pqn8ZcilojhieTvFE85jmruiz+8HT9+/qr/wDBrR3i5iqaZ3pmYnzxOzhOK/5TKO/LZY8UfoDwR+75X8ZkeFsDG1Pow1vCv5drFu3dSsRjXL08tHWxRvTTVPhE7TG/nmGvpqmYiJmZiO6JnuV2F/dHq/8Am+P/ANEvO1dq7ff8p1tvO/2fPa6O+LbmV1E6Jk2oifnXru1NqmPPNe/Lt64fvjPOwoo0jQdOyacrF0fGqs1ZNH0bt6urmuTT/h37IlNTk35s9TN+7Nr0c3J5fw32dSUVmZ3tKPFG20LvSdOyeJejGvS9KojI1HA1ScqvFpqiK67VduKeamJ79phGZuDlabm3cPNsV2Mm1O1y1XG1VM7b9v3TDoorqoqiqiqqmqO6aZ2mCqqquqaqqpqqnvmZ3mXa1mJnsTMTDgBNEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfZd1bUr+N8mvahmXMfaI6qu/XVRtHd82Z27HxjmwO/FzcrBuTcxMq/j11RyzVZuVUTMebeJ7nQA7L9+9k3qr2RduXbtc71V3Kpqqq9sz2y6wAAdAAAAAAAAB2RfvU49WPF65FiqqK6rcVzyzVHdMx3b+t1jgAOgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//2Q==" alt="img"></p><p>typescript \u6709\u4EE5\u4E0B\u51E0\u4E2A\u7279\u70B9</p><ul><li>typescript \u4F1A\u5728\u7F16\u8BD1\u65F6\u5BF9\u4EE3\u7801\u8FDB\u884C\u4E25\u683C\u7684\u9759\u6001\u7C7B\u578B\u68C0\u67E5\uFF0C\u53EF\u4EE5\u5728\u7F16\u7801\u9636\u6BB5\u5C31\u53D1\u73B0\u95EE\u9898\uFF0C\u800C\u4E0D\u662F\u5728\u4E0A\u7EBF\u8FD0\u884C\u65F6\u624D\u53D1\u73B0</li><li>typeScript \u8BED\u6CD5\u9075\u5FAA ES \u89C4\u8303\uFF0C\u66F4\u7EC6\u901F\u5EA6\u5FEB\uFF0C\u4E0D\u65AD\u652F\u6301\u6700\u65B0\u7684 ECMAScript \u65B0\u7279\u6027\uFF0C\u5982\u88C5\u9970\u5668\u3001public/private \u4FEE\u9970\u7B26</li><li>typescript \u652F\u6301 OOP\uFF08\u9762\u5411\u5BF9\u8C61\uFF09\u7684\u63A5\u53E3\uFF0C\u62BD\u8C61\u7C7B\uFF0C\u591A\u6001\u7279\u6027</li><li>typescript \u53EF\u4EE5\u4E3A IDE \u63D0\u4F9B\u66F4\u597D\u7684\u4EE3\u7801\u8865\u5168\u3001\u63A5\u53E3\u63D0\u793A\u3001\u8DF3\u8F6C\u5230\u5B9A\u4E49</li><li>\u8FD8\u6709\u91CD\u8981\u4E00\u70B9\u662F\u4F17\u591A\u79D1\u6280\u516C\u53F8\u5DF2\u7ECF\u91C7\u7528 typeScript \u8FDB\u884C\u5F00\u53D1\uFF0C\u4E5F\u662F\u524D\u7AEF\u5DE5\u7A0B\u5E08\u9700\u8981\u638C\u63E1\u7684\u5C31\u4E1A\u6280\u80FD</li></ul><h2 id="\u5B89\u88C5\u73AF\u5883" tabindex="-1">\u5B89\u88C5\u73AF\u5883 <a class="header-anchor" href="#\u5B89\u88C5\u73AF\u5883" aria-hidden="true">#</a></h2><p>\u4E0B\u9762\u6765\u5B89\u88C5\u5B66\u4E60 typescript \u65F6\u7684\u5F00\u53D1\u73AF\u5883</p><h3 id="node" tabindex="-1">node <a class="header-anchor" href="#node" aria-hidden="true">#</a></h3><p>\u9996\u5148\u9700\u8981\u5B89\u88C5 <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer">node.js (opens new window)</a>\u6211\u76F8\u4FE1\u505A\u524D\u7AEF\u7684\u90FD\u5DF2\u7ECF\u5B89\u88C5\u4E86</p><p><img src="https://doc.houdunren.com/assets/img/u=3401268567,2977119306&amp;fm=26&amp;fmt=auto.4efa1d98.jpeg" alt="img"></p><h3 id="\u5168\u5C40\u5B89\u88C5-ts" tabindex="-1">\u5168\u5C40\u5B89\u88C5 TS <a class="header-anchor" href="#\u5168\u5C40\u5B89\u88C5-ts" aria-hidden="true">#</a></h3><p>\u7136\u540E\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\u5B89\u88C5 typescript</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">npm install -g typescript</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5982\u679C\u4F60\u4F7F\u7528\u7684\u662F mac \u7CFB\u7EDF\u4E5F\u53EF\u4EE5\u6267\u884C</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">brew install typescript</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5982\u679C\u662F linux \u7CFB\u7EDF\u53EF\u4EE5\u901A\u8FC7\u76F8\u5E94\u7684\u8F6F\u4EF6\u7BA1\u7406\u547D\u4EE4\u5B89\u88C5\uFF0C\u6BD4\u5982\u4EE5\u4E0B\u662F manjaro \u7684\u5B89\u88C5\u793A\u4F8B</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">sudo pacman -Sy typescript</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5B89\u88C5\u540E\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\u68C0\u67E5\u662F\u5426\u5B89\u88C5\u6210\u529F</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">tsc -v</span></span>
<span class="line"><span style="color:#A6ACCD;">//\u5982\u679C\u663E\u793A\u4EE5\u4E0B\u5185\u5BB9\u5373\u8868\u793A\u5B89\u88C5\u6210\u529F</span></span>
<span class="line"><span style="color:#A6ACCD;">// Version 4.2.4</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="\u9879\u76EE\u5B89\u88C5-ts" tabindex="-1">\u9879\u76EE\u5B89\u88C5 TS <a class="header-anchor" href="#\u9879\u76EE\u5B89\u88C5-ts" aria-hidden="true">#</a></h3><p>\u9664\u4E86\u5168\u5C40\u5B89\u88C5\u5916\uFF0C\u4E5F\u53EF\u4EE5\u5728\u9879\u76EE\u4E2D\u72EC\u7ACB\u5B89\u88C5 typescript\uFF0C\u8FD9\u53EF\u4EE5\u9650\u5B9A\u9879\u76EE\u4F7F\u7528\u7684 typescript \u7248\u672C</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">yarn init -y</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5B89\u88C5 typescript</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">yarn add -D typescript</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u67E5\u770B\u7248\u672C</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">yarn tsc -v</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u7F16\u8F91\u5668" tabindex="-1">\u7F16\u8F91\u5668 <a class="header-anchor" href="#\u7F16\u8F91\u5668" aria-hidden="true">#</a></h2><p>.ts \u662F typescript \u7684\u6269\u5C55\u540D\uFF0C\u5728\u9996\u6B21\u4F7F\u7528 vscode \u7F16\u5199.ts \u6587\u4EF6\u65F6\uFF0Cvscode \u4F1A\u81EA\u52A8\u4E0B\u8F7D\u652F\u6301 typescript \u7684\u63D2\u4EF6\u73AF\u5883</p><p><img src="https://doc.houdunren.com/assets/img/image-20210927101547461.fce7eba7.png" alt="image-20210927101547461"></p><h3 id="\u5173\u95ED-js-\u7684\u68C0\u9A8C" tabindex="-1">\u5173\u95ED JS \u7684\u68C0\u9A8C <a class="header-anchor" href="#\u5173\u95ED-js-\u7684\u68C0\u9A8C" aria-hidden="true">#</a></h3><p>\u9ED8\u8BA4\u5728\u7F16\u5199\u666E\u901A.js \u6587\u4EF6\u65F6\uFF0Cvscode \u4E5F\u4F1A\u8FDB\u884C\u7C7B\u578B\u6821\u9A8C\uFF0C\u8FD9\u6709\u65F6\u4E0D\u9700\u8981</p><p><img src="https://doc.houdunren.com/assets/img/image-20210927104116383.26b5980d.png" alt="image-20210927104116383"></p><h2 id="\u7F16\u8BD1-ts" tabindex="-1">\u7F16\u8BD1 TS <a class="header-anchor" href="#\u7F16\u8BD1-ts" aria-hidden="true">#</a></h2><p>\u6211\u4EEC\u4F7F\u7528 tsc \u547D\u4EE4\u53EF\u4EE5\u5C06 ts \u6587\u4EF6\u7F16\u8BD1\u4E3A js \u6587\u4EF6\uFF0C\u5982\u679C\u5728\u7F16\u8BD1\u8FC7\u7A0B\u4E2D\u6709 ts \u9519\u8BEF\u5C06\u5728\u547D\u4EE4\u884C\u62A5\u51FA</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">tsc test.ts //\u4F1A\u7F16\u8BD1\u751F\u6210 test.js \u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6BCF\u6B21\u4FEE\u6539 ts \u6587\u4EF6\u540E\u518D\u6267\u884C\u547D\u4EE4\u7F16\u8BD1\u4F1A\u8FC7\u4E8E\u7E41\u7410\uFF0C\u53EF\u4EE5\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\u81EA\u52A8\u76D1\u542C ts \u6587\u4EF6\u5185\u5BB9\u5E76\u81EA\u52A8\u751F\u6210 js \u6587\u4EF6</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">tsc test.ts -w</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u5E38\u89C1\u95EE\u9898" tabindex="-1">\u5E38\u89C1\u95EE\u9898 <a class="header-anchor" href="#\u5E38\u89C1\u95EE\u9898" aria-hidden="true">#</a></h2><h3 id="windows" tabindex="-1">windows <a class="header-anchor" href="#windows" aria-hidden="true">#</a></h3><p>\u5982\u679C\u5728 windows \u7CFB\u7EDF\u4E2D\u6267\u884C tsc \u547D\u4EE4\u62A5\u4EE5\u4E0B\u9519\u8BEF</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">... \u56E0\u4E3A\u5728\u6B64\u7CFB\u7EDF\u4E0A\u7981\u6B62\u8FD0\u884C\u811A\u672C ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u9700\u8981\u4EE5\u7BA1\u7406\u5458\u8EAB\u4EFD\u6267\u884C powerShell\uFF0C\u7136\u540E\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\uFF0C\u5728\u51FA\u73B0\u7684\u63D0\u793A\u9009\u62E9 <code>Y</code></p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">set-ExecutionPolicy RemoteSigned</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,43),p=[n];function l(i,c,d,r,o,m){return a(),s("div",null,p)}const q=A(t,[["render",l]]);export{v as __pageData,q as default};
