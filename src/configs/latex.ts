/*
 * @Author: sugar th14200143@163.com
 * @Date: 2022-10-25 09:10:51
 * @LastEditors: sugar th14200143@163.com
 * @LastEditTime: 2022-10-25 10:36:34
 * @FilePath: \ppt-model\src\configs\latex.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export const SYMBOL_LIST = [
  {
    type: 'operators',
    label: '数学',
    children: [
      { latex: '\\cdot' },
      { latex: '\\pm' },
      { latex: '\\mp' },
      { latex: '+' },
      { latex: '-' },
      { latex: '\\times' },
      { latex: '\\div' },
      { latex: '<' },
      { latex: '>' },
      { latex: '=' },
      { latex: '\\neq\\ne' },
      { latex: '\\leqq' },
      { latex: '\\geqq' },
      { latex: '\\leq' },
      { latex: '\\geq' },
      { latex: '\\propto' },
      { latex: '\\sim' },
      { latex: '\\equiv' },
      { latex: '\\dagger' },
      { latex: '\\ddagger' },
      { latex: '\\ell' },
      { latex: '\\#' },
      { latex: '\\$' },
      { latex: '\\&' },
      { latex: '\\%' },
      { latex: '\\langle\\rangle' },
      { latex: '()' },
      { latex: '[]' },
      { latex: '\\{\\}' },
      { latex: '||' },
      { latex: '\\|' },
      { latex: '\\exists' },
      { latex: '\\in' },
      { latex: '\\subset' },
      { latex: '\\supset' },
      { latex: '\\cup' },
      { latex: '\\cap' },
      { latex: '\\infty' },
      { latex: '\\partial' },
      { latex: '\\nabla' },
      { latex: '\\aleph' },
      { latex: '\\wp' },
      { latex: '\\therefore' },
      { latex: '\\mid' },
      { latex: '\\sum' },
      { latex: '\\prod' },
      { latex: '\\bigoplus' },
      { latex: '\\bigodot' },
      { latex: '\\int' },
      { latex: '\\oint' },
      { latex: '\\oplus' },
      { latex: '\\odot' },
      { latex: '\\perp' },
      { latex: '\\angle' },
      { latex: '\\triangle' },
      { latex: '\\Box' },
      { latex: '\\rightarrow' },
      { latex: '\\to' },
      { latex: '\\leftarrow' },
      { latex: '\\gets' },
      { latex: '\\circ' },
      { latex: '\\bigcirc' },
      { latex: '\\bullet' },
      { latex: '\\star' },
      { latex: '\\diamond' },
      { latex: '\\ast' },
      { latex: ',' },
      { latex: '.' },
      { latex: ';' },
      { latex: '!' }
    ]
  },
  {
    type: 'group',
    label: '组合',
    children: [
      { latex: '\\frac{a}{b}' },
      { latex: '\\frac{dx}{dx}' },
      { latex: '\\frac{\\partial a}{\\partial b}' },
      { latex: '\\sqrt{x}' },
      { latex: '\\sqrt[n]{x}' },
      { latex: 'x^{n}' },
      { latex: 'x_{n}' },
      { latex: 'x_a^b' },
      { latex: '\\int_{a}^{b}' },
      { latex: '\\oint_a^b' },
      { latex: '\\lim_{a \\rightarrow b}' },
      { latex: '\\prod_a^b' },
      { latex: '\\sum_a^b' },
      { latex: '\\left(\\begin{array}a \\\\ b\\end{array}\\right)' },
      { latex: '\\begin{bmatrix}a & b \\\\ c & d \\end{bmatrix}' },
      { latex: '\\begin{cases}a & x = 0 \\\\ b & x > 0\\end{cases}' },
      { latex: '\\hat{a}' },
      { latex: '\\breve{a}' },
      { latex: '\\acute{a}' },
      { latex: '\\grave{a}' },
      { latex: '\\tilde{a}' },
      { latex: '\\bar{a}' },
      { latex: '\\vec{a}' },
      { latex: '\\underline{a}' },
      { latex: '\\overline{a}' },
      { latex: '\\widehat{ab}' },
      { latex: '\\overleftarrow{ab}' },
      { latex: '\\overrightarrow{ab}' }
    ]
  },
  {
    type: 'verbatim',
    label: '函数',
    children: [
      { latex: '\\log' },
      { latex: '\\ln' },
      { latex: '\\exp' },
      { latex: '\\mod' },
      { latex: '\\lim' },
      { latex: '\\sin' },
      { latex: '\\cos' },
      { latex: '\\tan' },
      { latex: '\\csc' },
      { latex: '\\sec' },
      { latex: '\\cot' },
      { latex: '\\sinh' },
      { latex: '\\cosh' },
      { latex: '\\tanh' },
      { latex: '\\csch' },
      { latex: '\\sech' },
      { latex: '\\coth' },
      { latex: '\\arcsin' },
      { latex: '\\arccos' },
      { latex: '\\arctan' },
      { latex: '\\arccsc' },
      { latex: '\\arcsec' },
      { latex: '\\arccot' }
    ]
  },
  {
    type: 'greek',
    label: '希腊字母',
    children: [
      { latex: '\\alpha' },
      { latex: '\\beta' },
      { latex: '\\gamma' },
      { latex: '\\delta' },
      { latex: '\\varepsilon' },
      { latex: '\\zeta' },
      { latex: '\\eta' },
      { latex: '\\vartheta' },
      { latex: '\\iota' },
      { latex: '\\kappa' },
      { latex: '\\lambda' },
      { latex: '\\mu' },
      { latex: '\\nu' },
      { latex: '\\xi' },
      { latex: '\\omicron' },
      { latex: '\\pi' },
      { latex: '\\rho' },
      { latex: '\\sigma' },
      { latex: '\\tau' },
      { latex: '\\upsilon' },
      { latex: '\\varphi' },
      { latex: '\\chi' },
      { latex: '\\psi' },
      { latex: '\\omega' },
      { latex: '\\epsilon' },
      { latex: '\\theta' },
      { latex: '\\phi' },
      { latex: '\\varsigma' },
      { latex: '\\Alpha' },
      { latex: '\\Beta' },
      { latex: '\\Gamma' },
      { latex: '\\Delta' },
      { latex: '\\Epsilon' },
      { latex: '\\Zeta' },
      { latex: '\\Eta' },
      { latex: '\\Theta' },
      { latex: '\\Iota' },
      { latex: '\\Kappa' },
      { latex: '\\Lambda' },
      { latex: '\\Mu' },
      { latex: '\\Nu' },
      { latex: '\\Xi' },
      { latex: '\\Omicron' },
      { latex: '\\Pi' },
      { latex: '\\Rho' },
      { latex: '\\Sigma' },
      { latex: '\\Tau' },
      { latex: '\\Upsilon' },
      { latex: '\\Phi' },
      { latex: '\\Chi' },
      { latex: '\\Psi' },
      { latex: '\\Omega' }
    ]
  }
];
export const FORMULA_LIST = [
  {
    label: '高斯公式',
    latex: `\\int\\int\\int _ { \\Omega } \\left( \\frac { \\partial {P} } { \\partial {x} } + \\frac { \\partial {Q} } { \\partial {y} } + \\frac { \\partial {R} }{ \\partial {z} } \\right) \\mathrm { d } V = \\oint _ { \\partial \\Omega } ( P \\cos \\alpha + Q \\cos \\beta + R \\cos \\gamma ) \\mathrm{ d} S`
  },
  {
    label: '傅里叶级数',
    latex: `f(x) = \\frac {a_0} 2 + \\sum_{n = 1}^\\infty {({a_n}\\cos {nx} + {b_n}\\sin {nx})}`
  },
  {
    label: '泰勒展开式',
    latex: `e ^ { x } = 1 + \\frac { x } { 1 ! } + \\frac { x ^ { 2 } } { 2 ! } + \\frac { x ^ { 3 } } { 3 ! } + ... , \\quad - \\infty < x < \\infty`
  },
  {
    label: '定积分',
    latex: `\\lim_ { n \\rightarrow + \\infty } \\sum _ { i = 1 } ^ { n } f \\left[ a + \\frac { i } { n } ( b - a ) \\right] \\frac { b - a } { n } = \\int _ { a } ^ { b } f ( x ) dx`
  },
  {
    label: '三角恒等式1',
    latex: `\\sin \\alpha \\pm \\sin \\beta = 2 \\sin \\frac { 1 } { 2 } ( \\alpha \\pm \\beta ) \\cos \\frac { 1 } { 2 } ( \\alpha \\mp \\beta )`
  },
  {
    label: '三角恒等式2',
    latex: `\\cos \\alpha + \\cos \\beta = 2 \\cos \\frac { 1 } { 2 } ( \\alpha + \\beta ) \\cos \\frac { 1 } { 2 } ( \\alpha - \\beta )`
  },
  {
    label: '和的展开式',
    latex: `( 1 + x ) ^ { n } = 1 + \\frac { n x } { 1 ! } + \\frac { n ( n - 1 ) x ^ { 2 } } { 2 ! } + ...`
  },
  {
    label: '欧拉公式',
    latex: ` e^{ix} = \\cos {x} + i\\sin {x}`
  },
  {
    label: '贝努利方程',
    latex: `\\frac {dy} {dx} + P(x)y = Q(x) y^n ({n} \\not= {0,1})`
  },
  {
    label: '全微分方程',
    latex: `du(x,y) = P(x,y)dx + Q(x,y)dy = 0`
  },
  {
    label: '非齐次方程',
    latex: `y = (\\int Q(x) e^{\\int {P(x)dx}}dx + C)e^{-\\int {P(x)dx}}`
  },
  {
    label: '柯西中值定理',
    latex: `\\frac{{f(b) - f(a)}}{{F(b) - F(a)}} = \\frac{{f'(\\xi )}}{{F'(\\xi )}}`
  },
  {
    label: '拉格朗日中值定理',
    latex: `f(b) - f(a) = f'(\\xi )(b - a)`
  },
  {
    label: '导数公式',
    latex: `(\\arcsin x)' = \\frac{1}{{\\sqrt {1 - x^2} }}`
  },
  {
    label: '三角函数积分',
    latex: `\\int {tgxdx = - \\ln \\left| {\\cos x} \\right| + C}`
  },
  {
    label: '二次曲面',
    latex: `\\frac{{{x^2}}}{{{a^2}}} + \\frac{{{y^2}}}{{{b^2}}} - \\frac{{{z^2}}}{{{c^2}}} = 1`
  },
  {
    label: '二阶微分',
    latex: `\\frac {{d^2}y} {dx^2} + P(x) \\frac {dy} {dx} + Q(x)y = f(x)`
  },
  {
    label: '方向导数',
    latex: `\\frac{{\\partial f}}{{\\partial l}} = \\frac{{\\partial f}}{{\\partial x}}\\cos \\phi + \\frac{{\\partial f}}{{\\partial y}}\\sin \\phi`
  }
];
