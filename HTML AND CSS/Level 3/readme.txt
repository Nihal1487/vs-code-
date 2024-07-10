#panda1{
    position: static; /*  when position is static then no changes */
}

#panda2{
    position: relative;
    top: 14px; /* also  use bottom left and right   its move itself */
}

#panda3{
    position: absolute;
    top: 50px;   /* also  use bottom left and right  move from the browser full page.... */
    left: 200px;
    z-index: 3; /* this is in - then box is not imp but when z index value is in + then box is most imp */
}

#panda4{
    position: fixed;
    top: 200px;
    left:0px;
}
#panda5{
    position: sticky;
    top: 20px;
    left: 100px;
}