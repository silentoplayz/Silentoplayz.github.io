function timeout() {
	document.getElementById("button1").disabled = !0, setTimeout(generate(), 500)
}

function generate() {
   document.getElementById("button1").disabled = !1;
    var r, e = "",
        t = "",
        a = "",
        o = "",
        i = "",
        n = "",
        l = "",
        M = "",
        R = "";
    document.getElementById("primary1").innerHTML = "",
        document.getElementById("primary2").innerHTML = "",
        document.getElementById("primary3").innerHTML = "",
        document.getElementById("primary4").innerHTML = "",
        document.getElementById("primary5").innerHTML = "",
        document.getElementById("primary6").innerHTML = "",
        document.getElementById("primary7").innerHTML = "",
        document.getElementById("primary8").innerHTML = "",
        document.getElementById("primary9").innerHTML = "",
        document.getElementById("secondary1").innerHTML = "",
        document.getElementById("secondary2").innerHTML = "",
        document.getElementById("secondary3").innerHTML = "",
        document.getElementById("secondary4").innerHTML = "",
        document.getElementById("secondary5").innerHTML = "",
        document.getElementById("secondary6").innerHTML = "",
        document.getElementById("secondary7").innerHTML = "",
        document.getElementById("secondary8").innerHTML = "";

    var c = ["OPTIC - Classic Red Dot Sight", "OPTIC - Red Dot Sight 1", "OPTIC - Red Dot Sight 2", "OPTIC - Red Dot Sight 3", "OPTIC - Red Dot Sight 4", "OPTIC - Red Dot Sight 5", "OPTIC - Red Dot Sight 6", "OPTIC - Classic Holographic Sight", "OPTIC - Holographic Sight 1", "OPTIC - Holographic Sight 2", "OPTIC - Holographic Sight 3", "OPTIC - Tactical Scope", "OPTIC - 3X Tactical Scope 1", "OPTIC - 3X Tactical Scope 2", "OPTIC - 3X Tactical Scope 3", "OPTIC - 4X Tactical Scope", "OPTIC - OWC 4.4X Tactical Scope", "OPTIC - RTC 4.4X Tactical Scope"],
        h = ["MUZZLE - Tactical Suppressor", "MUZZLE - OWC Light Suppressor", "MUZZLE - Monolithic Suppressor", "MUZZLE - OWC Light Compensator", "MUZZLE - MIP Light Flash Guard", "MUZZLE - RTC Light Muzzle Brake"],
        m = ["BARREL - OWC Ranger", "BARREL - MIP Light", "BARREL - MIP Light Barrel (Short)", "BARREL - OWC Marksman", "BARREL - YKM Integral Suppressor Light"],
        p = ["STOCK - No Stock", "STOCK - YKM Light Stock", "STOCK - YKM Combat Stock", "STOCK - MIP Strike Stock"],
        S = ["PERK - FMJ", "PERK - Sleight of Hand", "PERK - Wounding", "PERK - Full Ammo", "PERK - Disable", "PERK - Tough", "PERK - Long Shot", "PERK - Melee Master"],
        d = ["LASER - RTC Laser 1mW", "LASER - MIP Laser 5mW", "LASER - OWC Laser - Tactical"],
        L = ["UNDERBARREL - Strike Foregrip", "UNDERBARREL - Merc Foregrip", "UNDERBARREL - Operator Foregrip", "UNDERBARREL - Ranger Foregrip", "UNDERBARREL - Tactical Foregrip A"],
        u = ["AMMUNITION - 40 Round Extended Mag", "AMMUNITION - 50 Round Extended Mag"],
        T = ["REAR GRIP - Stippled Grip Tape", "REAR GRIP - Granulated Grip Tape", "REAR GRIP - Rubberized Grip Tape"],
        E = ["MUZZLE - Tactical Suppressor", "MUZZLE - OWC Light Suppressor", "MUZZLE - Monolithic Suppressor", "MUZZLE - OWC Light Compensator", "MUZZLE - MIP Light Flash Guard", "MUZZLE - RTC Light Muzzle Brake"],
        g = ["BARREL - MIP Light", "BARREL - MIP Light Barrel (Short)", "BARREL - MIP Extended Light Barrel"],
        P = ["STOCK - YKM Light Stock", "STOCK - RTC Steady Stock", "STOCK - YKM Combat Stock"],
        A = ["PERK - FMJ", "PERK - Sleight of Hand", "PERK - Tough", "PERK - Long Shot", "PERK - Melee Master", "PERK - Wounding", "PERK - Full Ammo", "PERK - Disable"],
        O = ["LASER - RTC Laser 1mW", "LASER - MIP Laser 5mW", "LASER - OWC Laser - Tactical"],
        s = ["UNDERBARREL - Strike Foregrip", "UNDERBARREL - Merc Foregrip", "UNDERBARREL - Operator Foregrip", "UNDERBARREL - Ranger Foregrip", "UNDERBARREL - Tactical Foregrip A"],
        f = ["AMMUNITION - 38 Round Extended Mag", "AMMUNITION - Fast Reload", "AMMUNITION - 46 Round Extended Mag", "AMMUNITION - 42 Round Fast Reload", "AMMUNITION - Stopping Power Reload"],
        C = ["REAR GRIP - Stippled Grip Tape", "REAR GRIP - Granulated Grip Tape", "REAR GRIP - Rubberized Grip Tape"],
        I = ["MUZZLE - OWC Light Suppressor", "MUZZLE - OWC Light Compensator", "MUZZLE - RTC Light Muzzle Brake", "MUZZLE - Tactical Suppressor", "MUZZLE - MIP Light Flash Guard", "MUZZLE - Monolithic Suppressor"],
        y = ["BARREL - YKM Integral Suppressor Light", "BARREL - MIP Light Barrel (Short)", "BARREL - OWC Marksman"],
        U = ["STOCK - YKM Light Stock", "STOCK - MIP Strike Stock", "STOCK - YKM Combat Stock", "STOCK - No Stock"],
        k = ["PERK - FMJ", "PERK - Tough", "PERK - Long Shot", "PERK - Melee Master", "PERK - Sleight of Hand", "PERK - Wounding", "PERK - Full Ammo", "PERK - Disable"],
        B = ["LASER - RTC Laser 1mW", "LASER - MIP Laser 5mW", "LASER - OWC Laser - Tactical"],
        G = ["UNDERBARREL - Strike Foregrip", "UNDERBARREL - Merc Foregrip", "UNDERBARREL - Operator Foregrip", "UNDERBARREL - Ranger Foregrip", "UNDERBARREL - Tactical Foregrip A"],
        K = ["AMMUNITION - 39 Round Extended Mag", "AMMUNITION - 48 Round Extended Mag"],
        H = ["REAR GRIP - Stippled Grip Tape", "REAR GRIP - Granulated Grip Tape", "REAR GRIP - Rubberized Grip Tape"],
        z = ["MUZZLE - OWC Light Suppressor", "MUZZLE - OWC Light Compensator", "MUZZLE - RTC Light Muzzle Brake", "MUZZLE - Tactical Suppressor", "MUZZLE - MIP Light Flash Guard", "MUZZLE - MIP Light Muzzle Brake", "MUZZLE - Monolithic Suppressor"],
        Z = ["BARREL - MIP Light Barrel (Short)", "BARREL - MIP Extended Light Barrel", "BARREL - OWC Marksman", "BARREL - YKM Integral Suppressor"],
        N = ["STOCK - YKM Light Stock", "STOCK - RTC Steady Stock", "STOCK - OWC Skeleton Stock", "STOCK - No Stock"],
        b = ["PERK - FMJ", "PERK - Tough", "PERK - Long Shot", "PERK - Melee Master", "PERK - Sleight of Hand", "PERK - Wounding", "PERK - Full Ammo", "PERK - Disable"],
        q = ["LASER - RTC Laser 1mW", "LASER - MIP Laser 5mW", "LASER - OWC Laser - Tactical"],
        D = ["UNDERBARREL - Strike Foregrip", "UNDERBARREL - Merc Foregrip", "UNDERBARREL - Operator Foregrip", "UNDERBARREL - Ranger Foregrip", "UNDERBARREL - Tactical Foregrip A", "UNDERBARREL - Tactical Foregrip B"],
        F = ["AMMUNITION - 40 Round Extended Mag", "AMMUNITION - 48 Round Extended Mag"],
        W = ["REAR GRIP - Stippled Grip Tape", "REAR GRIP - Granulated Grip Tape", "REAR GRIP - Rubberized Grip Tape"],
        X = ["MUZZLE - OWC Light Suppressor", "MUZZLE - OWC Light Compensator", "MUZZLE - RTC Light Muzzle Brake", "MUZZLE - Tactical Suppressor", "MUZZLE - MIP Light Flash Guard", "MUZZLE - Monolithic Suppressor"],
        Y = ["BARREL - MIP Light Barrel (Short)", "BARREL - OWC Ranger", "BARREL - OWC Marksman", "BARREL - MIP Extended Light Barrel"],
        x = ["STOCK - YKM Light Stock", "STOCK - MIP Strike Stock", "STOCK - YKM Combat Stock", "STOCK - OWC Skeleton Stock", "STOCK - No Stock"],
        J = ["PERK - FMJ", "PERK - Tough", "PERK - Long Shot", "PERK - Melee Master", "PERK - Sleight of Hand", "PERK - Wounding", "PERK - Full Ammo", "PERK - Disable"],
        v = ["LASER - RTC Laser 1mW", "LASER - MIP Laser 5mW", "LASER - OWC Laser - Tactical"],
        w = ["UNDERBARREL - Strike Foregrip", "UNDERBARREL - Merc Foregrip", "UNDERBARREL - Operator Foregrip", "UNDERBARREL - Ranger Foregrip", "UNDERBARREL - Tactical Foregrip A"],
        Q = ["AMMUNITION - 5.45 Caliber Ammo", "AMMUNITION - Extended Mag A", "AMMUNITION - Large Extended Mag B"],
        V = ["REAR GRIP - Stippled Grip Tape", "REAR GRIP - Granulated Grip Tape", "REAR GRIP - Rubberized Grip Tape"],
        j = ["MUZZLE - OWC Light Suppressor", "MUZZLE - OWC Light Compensator", "MUZZLE - RTC Light Muzzle Brake", "MUZZLE - Tactical Suppressor", "MUZZLE - MIP Light Flash Guard", "MUZZLE - Monolithic Suppressor"],
        $ = ["BARREL - MIP Light Barrel (Short)", "BARREL - OWC Ranger", "BARREL - OWC Marksman"],
        _ = ["STOCK - YKM Light Stock", "STOCK - MIP Strike Stock", "STOCK - YKM Combat Stock", "STOCK - No Stock"],
        rr = ["PERK - FMJ", "PERK - Tough", "PERK - Long Shot", "PERK - Melee Master", "PERK - Sleight of Hand", "PERK - Wounding", "PERK - Full Ammo", "PERK - Disable"],
        er = ["LASER - RTC Laser 1mW", "LASER - MIP Laser 5mW", "LASER - OWC Laser - Tactical"],
        tr = ["UNDERBARREL - Strike Foregrip", "UNDERBARREL - Merc Foregrip", "UNDERBARREL - Operator Foregrip", "UNDERBARREL - Ranger Foregrip", "UNDERBARREL - Tactical Foregrip A"],
        ar = ["AMMUNITION - 33 Round Extended Mag", "AMMUNITION - 40 Round Extended Mag"],
        or = ["REAR GRIP - Stippled Grip Tape", "REAR GRIP - Granulated Grip Tape", "REAR GRIP - Rubberized Grip Tape"],
        ir = ["MUZZLE - OWC Light Suppressor", "MUZZLE - OWC Light Compensator", "MUZZLE - RTC Light Muzzle Brake", "MUZZLE - Tactical Suppressor", "MUZZLE - MIP Light Flash Guard", "MUZZLE - MIP Light Muzzle Brake", "MUZZLE - Monolithic Suppressor"],
        nr = ["BARREL - MIP Light Barrel (Short)", "BARREL - OWC Ranger", "BARREL - MIP Extended Light Barrel"],
        lr = ["STOCK - YKM Light Stock", "STOCK - OWC Skeleton Stock", "STOCK - YKM Combat Stock"],
        Mr = ["PERK - FMJ", "PERK - Tough", "PERK - Long Shot", "PERK - Melee Master", "PERK - Sleight of Hand", "PERK - Wounding", "PERK - Full Ammo", "PERK - Disable"],
        Rr = ["LASER - RTC Laser 1mW", "LASER - MIP Laser 5mW", "LASER - OWC Laser - Tactical"],
        cr = ["UNDERBARREL - Strike Foregrip", "UNDERBARREL - Elite Foregrip", "UNDERBARREL - Merc Foregrip", "UNDERBARREL - Operator Foregrip", "UNDERBARREL - Ranger Foregrip", "UNDERBARREL - Tactical Foregrip A"],
        hr = ["AMMUNITION - 40 Round Fast Reload", "AMMUNITION - 50 Round Extended Mag", "AMMUNITION - Large Caliber Ammo"],
        mr = ["REAR GRIP - Stippled Grip Tape", "REAR GRIP - Granulated Grip Tape", "REAR GRIP - Rubberized Grip Tape"],
        pr = ["MUZZLE - OWC Light Suppressor", "MUZZLE - OWC Light Compensator", "MUZZLE - RTC Light Muzzle Brake", "MUZZLE - Tactical Suppressor", "MUZZLE - MIP Light Flash Guard", "MUZZLE - Monolithic Suppressor"],
        Sr = ["BARREL - YKM Integral Suppressor Light", "BARREL - OWC Ranger", "BARREL - OWC Marksman"],
        dr = ["STOCK - YKM Light Stock", "STOCK - MIP Strike Stock", "STOCK - YKM Combat Stock", "STOCK - No Stock"],
        Lr = ["PERK - FMJ", "PERK - Tough", "PERK - Long Shot", "PERK - Melee Master", "PERK - Sleight of Hand", "PERK - Wounding", "PERK - Full Ammo", "PERK - Disable"],
        ur = ["LASER - RTC Laser 1mW", "LASER - MIP Laser 5mW", "LASER - OWC Laser - Tactical"],
        Tr = ["UNDERBARREL - Strike Foregrip", "UNDERBARREL - Merc Foregrip", "UNDERBARREL - Operator Foregrip", "UNDERBARREL - Ranger Foregrip", "UNDERBARREL - Tactical Foregrip A"],
        Er = ["AMMUNITION - 40 Round Extended Mag", "AMMUNITION - 50 Round Extended Mag"],
        gr = ["REAR GRIP - Stippled Grip Tape", "REAR GRIP - Granulated Grip Tape", "REAR GRIP - Rubberized Grip Tape"],
        Pr = ["MUZZLE - OWC Light Suppressor", "MUZZLE - OWC Light Compensator", "MUZZLE - RTC Light Muzzle Brake", "MUZZLE - Tactical Suppressor", "MUZZLE - Breacher Device", "MUZZLE - MIP Light Flash Guard", "MUZZLE - Monolithic Suppressor"],
        Ar = ["BARREL - YKM Integral Suppressor Light", "BARREL - OWC Ranger", "BARREL - OWC Marksman"],
        Or = ["STOCK - YKM Light Stock", "STOCK - RTC Steady Stock", "STOCK - YKM Combat Stock", "STOCK - No Stock"],
        sr = ["PERK - FMJ", "PERK - Tough", "PERK - Long Shot", "PERK - Melee Master", "PERK - Sleight of Hand", "PERK - Wounding", "PERK - Full Ammo", "PERK - Disable"],
        fr = ["LASER - RTC Laser 1mW", "LASER - MIP Laser 5mW", "LASER - OWC Laser - Tactical"],
        Cr = ["UNDERBARREL - Strike Foregrip", "UNDERBARREL - Merc Foregrip", "UNDERBARREL - Operator Foregrip", "UNDERBARREL - Ranger Foregrip", "UNDERBARREL - Tactical Foregrip A"],
        Ir = ["AMMUNITION - 40 Round Extended Mag", "AMMUNITION - 40 Round Fast Reload", "AMMUNITION - 50 Round Fast Reload"],
        yr = ["REAR GRIP - Stippled Grip Tape", "REAR GRIP - Granulated Grip Tape", "REAR GRIP - Rubberized Grip Tape"],
        Ur = ["MUZZLE - OWC Light Suppressor", "MUZZLE - OWC Light Compensator", "MUZZLE - RTC Light Muzzle Brake", "MUZZLE - Tactical Suppressor", "MUZZLE - MIP Light Flash Guard", "MUZZLE - RTC Huge Suppressor", "MUZZLE - Monolithic Suppressor"],
        kr = ["BARREL - MIP Light Barrel (Short)", "BARREL - OWC Ranger", "BARREL - OWC Marksman"],
        Br = ["STOCK - YKM Light Stock", "STOCK - MIP Strike Stock", "STOCK - YKM Combat Stock"],
        Gr = ["PERK - FMJ", "PERK - Tough", "PERK - Long Shot", "PERK - Melee Master", "PERK - Sleight of Hand", "PERK - Wounding", "PERK - Full Ammo", "PERK - Disable"],
        Kr = ["LASER - RTC Laser 1mW", "LASER - MIP Laser 5mW", "LASER - OWC Laser - Tactical"],
        Hr = ["UNDERBARREL - Strike Foregrip", "UNDERBARREL - Merc Foregrip", "UNDERBARREL - Operator Foregrip", "UNDERBARREL - Ranger Foregrip", "UNDERBARREL - Tactical Foregrip A"],
        zr = ["AMMUNITION - 30 Round Extended Mag", "AMMUNITION - 35 Round Extended Mag"],
        Zr = ["REAR GRIP - Stippled Grip Tape", "REAR GRIP - Granulated Grip Tape", "REAR GRIP - Rubberized Grip Tape"],
        Nr = ["MUZZLE - OWC Light Suppressor", "MUZZLE - OWC Light Compensator", "MUZZLE - RTC Light Muzzle Brake", "MUZZLE - Tactical Suppressor", "MUZZLE - MIP Light Flash Guard", "MUZZLE - Monolithic Suppressor", "MUZZLE - MIP Light Muzzle Brake"],
        br = ["BARREL - MIP Light Barrel (Short)", "BARREL - OWC Ranger", "BARREL - OWC Marksman"],
        qr = ["STOCK - YKM Light Stock", "STOCK - MIP Strike Stock", "STOCK - YKM Combat Stock", "STOCK - No Stock"],
        Dr = ["PERK - FMJ", "PERK - Tough", "PERK - Long Shot", "PERK - Melee Master", "PERK - Sleight of Hand", "PERK - Wounding", "PERK - Full Ammo", "PERK - Disable"],
        Fr = ["LASER - RTC Laser 1mW", "LASER - MIP Laser 5mW", "LASER - OWC Laser - Tactical"],
        Wr = ["UNDERBARREL - Strike Foregrip", "UNDERBARREL - Merc Foregrip", "UNDERBARREL - Operator Foregrip", "UNDERBARREL - Ranger Foregrip", "UNDERBARREL - Tactical Foregrip A"],
        Xr = ["AMMUNITION - 44 Round Extended Mag", "AMMUNITION - 38 Round Fast Reload"],
        Yr = ["REAR GRIP - Stippled Grip Tape", "REAR GRIP - Granulated Grip Tape", "REAR GRIP - Rubberized Grip Tape"],
        xr = ["MUZZLE - OWC Light Suppressor", "MUZZLE - OWC Light Compensator", "MUZZLE - RTC Light Muzzle Brake", "MUZZLE - Tactical Suppressor", "MUZZLE - MIP Light Flash Guard", "MUZZLE - MIP Light Muzzle Brake", "MUZZLE - Monolithic Suppressor"],
        Jr = ["BARREL - MIP Light", "BARREL - OWC Ranger", "BARREL - OWC Marksman"],
        vr = ["STOCK - YKM Light Stock", "STOCK - RTC Steady Stock", "STOCK - OWC Skeleton Stock", "STOCK - No Stock"],
        wr = ["PERK - FMJ", "PERK - Tough", "PERK - Long Shot", "PERK - Melee Master", "PERK - Sleight of Hand", "PERK - Wounding", "PERK - Full Ammo", "PERK - Disable"],
        Qr = ["LASER - RTC Laser 1mW", "LASER - MIP Laser 5mW", "LASER - OWC Laser - Tactical"],
        Vr = ["UNDERBARREL - Strike Foregrip", "UNDERBARREL - Merc Foregrip", "UNDERBARREL - Operator Foregrip", "UNDERBARREL - Ranger Foregrip", "UNDERBARREL - Tactical Foregrip A"],
        jr = ["AMMUNITION - 44 Round Extended Mag", "AMMUNITION - Fast Extended Mag"],
        $r = ["REAR GRIP - Stippled Grip Tape", "REAR GRIP - Granulated Grip Tape", "REAR GRIP - Rubberized Grip Tape"],
        _r = ["MUZZLE - OWC Light Suppressor", "MUZZLE - OWC Light Compensator", "MUZZLE - RTC Light Muzzle Brake", "MUZZLE - Tactical Suppressor", "MUZZLE - MIP Light Flash Guard", "MUZZLE - Monolithic Suppressor"],
        re = ["BARREL - MIP Light", "BARREL - YKM Integral Suppressor Heavy", "BARREL - OWC Marksman"],
        ee = ["STOCK - YKM Light Stock", "STOCK - MIP Strike Stock", "STOCK - YKM Combat Stock"],
        te = ["PERK - FMJ", "PERK - Tough", "PERK - Long Shot", "PERK - Melee Master", "PERK - Sleight of Hand", "PERK - Wounding", "PERK - Full Ammo", "PERK - Disable"],
        ae = ["LASER - RTC Laser 1mW", "LASER - MIP Laser 5mW", "LASER - OWC Laser - Tactical"],
        oe = ["UNDERBARREL - Strike Foregrip", "UNDERBARREL - Merc Foregrip", "UNDERBARREL - Operator Foregrip", "UNDERBARREL - Ranger Foregrip", "UNDERBARREL - Tactical Foregrip A"],
        ie = ["AMMUNITION - Fast Reload", "AMMUNITION - Large Caliber Ammo", "AMMUNITION - 44 Round Extended Mag"],
        ne = ["REAR GRIP - Stippled Grip Tape", "REAR GRIP - Granulated Grip Tape", "REAR GRIP - Rubberized Grip Tape"],
        le = ["MUZZLE - OWC Light Suppressor", "MUZZLE - OWC Light Compensator", "MUZZLE - RTC Light Muzzle Brake", "MUZZLE - Tactical Suppressor", "MUZZLE - MIP Light Flash Guard", "MUZZLE - Monolithic Suppressor", "MUZZLE - MIP Light Muzzle Brake"],
        Me = ["BARREL - MIP Light", "BARREL - OWC Ranger", "BARREL - OWC Marksman"],
        Re = ["STOCK - YKM Light Stock", "STOCK - MIP Strike Stock", "STOCK - YKM Combat Stock", "STOCK - No Stock"],
        ce = ["PERK - FMJ", "PERK - Tough", "PERK - Long Shot", "PERK - Melee Master", "PERK - Sleight of Hand", "PERK - Wounding", "PERK - Full Ammo", "PERK - Disable"],
        he = ["LASER - RTC Laser 1mW", "LASER - MIP Laser 5mW", "LASER - OWC Laser - Tactical"],
        me = ["UNDERBARREL - Strike Foregrip", "UNDERBARREL - Merc Foregrip", "UNDERBARREL - Operator Foregrip", "UNDERBARREL - Ranger Foregrip", "UNDERBARREL - Tactical Foregrip A"],
        pe = ["AMMUNITION - 30 Round Extended Mag", "AMMUNITION - 30 Round OTM Mag", "AMMUNITION - 38 Round Extended Mag", "AMMUNITION - 25 Round OTM Mag"],
        Se = ["REAR GRIP - Stippled Grip Tape", "REAR GRIP - Granulated Grip Tape", "REAR GRIP - Rubberized Grip Tape"],
        de = ["MUZZLE - OWC Light Suppressor", "MUZZLE - Agency Suppressor", "MUZZLE - Infantry Compensator", "MUZZLE - MIP Flashguard", "MUZZLE - OWC Eliminator", "MUZZLE - RTC Muzzle Brake"],
        Le = ["BARREL - Rapid Fire Barrel", "BARREL - Well-Forged Barrel", "BARREL - Taskforce Barrel", "BARREL - Long-Range Barrel", "BARREL - Built-In Silence Barrel"],
        ue = ["STOCK - Light Weight Stock", "STOCK - Marathon Stock", "STOCK - Agile Stock", "STOCK - No Stock"],
        Te = ["PERK - FMJ", "PERK - Tough", "PERK - Long Shot", "PERK - Melee Master", "PERK - Sleight of Hand", "PERK - Wounding", "PERK - Full Ammo", "PERK - Disable"],
        Ee = ["LASER - 1mW Steady Aim Laser", "LASER - 5mW Combat Laser", "LASER - Aim Assist Laser"],
        ge = ["UNDERBARREL - RTC Speed Foregrip", "UNDERBARREL - Infiltrator Foregrip", "UNDERBARREL - Foregrip", "UNDERBARREL - Patrol Foregrip", "UNDERBARREL - Field Agent Foregrip"],
        Pe = ["AMMUNITION - Extended Mag A", "AMMUNITION - Double Stack Mag"],
        Ae = ["REAR GRIP - Rustle Grip Tape", "REAR GRIP - Sturdy Grip Tape", "REAR GRIP - Firm Grip Tape"],
        Oe = ["MUZZLE - OWC Light Suppressor", "MUZZLE - OWC Light Compensator", "MUZZLE - RTC Light Muzzle Brake", "MUZZLE - Tactical Suppressor", "MUZZLE - MIP Light Flash Guard", "MUZZLE - Monolithic Suppressor"],
        se = ["BARREL - MIP Light Barrel (Short)", "BARREL - OWC Ranger", "BARREL - MIP Extended Light Barrel"],
        fe = ["STOCK - YKM Light Stock", "STOCK - YKM Combat Stock", "STOCK - RTC Steady Stock"],
        Ce = ["PERK - FMJ", "PERK - Tough", "PERK - Long Shot", "PERK - Melee Master", "PERK - Sleight of Hand", "PERK - Wounding", "PERK - Full Ammo", "PERK - Disable"],
        Ie = ["LASER - RTC Laser 1mW", "LASER - MIP Laser 5mW", "LASER - OWC Laser - Tactical"],
        ye = ["UNDERBARREL - Strike Foregrip", "UNDERBARREL - Bipod", "UNDERBARREL - Merc Foregrip", "UNDERBARREL - Operator Foregrip", "UNDERBARREL - Ranger Foregrip", "UNDERBARREL - Tactical Foregrip A"],
        Ue = ["AMMUNITION - Extended Mag A", "AMMUNITION - Fast Reload"],
        ke = ["REAR GRIP - Stippled Grip Tape", "REAR GRIP - Granulated Grip Tape", "REAR GRIP - Rubberized Grip Tape"],
        Be = ["MUZZLE - OWC Light Suppressor", "MUZZLE - Monolithic Suppressor", "MUZZLE - RTC Light Muzzle Brake", "MUZZLE - Tactical Suppressor", "MUZZLE - MIP Light Flash Guard", "MUZZLE - RTC Compensator"],
        Ge = ["BARREL - RTC Lightweight", "BARREL - RTC CQB", "BARREL - RTC Long"],
        Ke = ["OPTIC - Tactical Scope", "OPTIC - 4X Tactical Scope", "OPTIC - 3X Tactical Scope A", "OPTIC - 3X Tactical Scope B", "OPTIC - 3X Tactical Scope C", "OPTIC - 6X Tactical Scope B", "OPTIC - 6X Tactical Scope C"],
        He = ["STOCK - MIP Strike Stock", "STOCK - No Stock", "STOCK - YKM Ghost Stock"],
        ze = ["PERK - FMJ", "PERK - Bullet Return", "PERK - Headshot Slow", "PERK - Fast Switch", "PERK - Sleight of Hand", "PERK - Wounding", "PERK - Disable", "PERK - Full Ammo"],
        Ze = ["UNDERBARREL - Strike Foregrip", "UNDERBARREL - Bipod", "UNDERBARREL - Operator Foregrip", "UNDERBARREL - Tactical Foregrip A", "UNDERBARREL - Ranger Foregrip", "UNDERBARREL - Merc Foregrip"],
        Ne = ["AMMUNITION - 13 Round Reload", "AMMUNITION - 18 Round Reload", "AMMUNITION - OWC Stopping Power Reload"],
        be = ["MUZZLE - OWC Light Suppressor", "MUZZLE - Monolithic Suppressor", "MUZZLE - RTC Light Muzzle Brake", "MUZZLE - Tactical Suppressor", "MUZZLE - MIP Light Flash Guard", "MUZZLE - RTC Compensator"],
        qe = ["BARREL - Assassin Short", "BARREL - 0.5 Light Long", "BARREL - Anti-Material Heavy", "BARREL - OWC Monolithic Suppressor"],
        De = ["OPTIC - Tactical Scope", "OPTIC - 4X Tactical Scope", "OPTIC - 3X Tactical Scope A", "OPTIC - 3X Tactical Scope B", "OPTIC - 3X Tactical Scope C", "OPTIC - 6X Tactical Scope B", "OPTIC - 6X Tactical Scope C"],
        Fe = ["STOCK - OWC Skeleton Stock", "STOCK - RTC Steady Stock", "STOCK - YKM Light Stock"],
        We = ["PERK - FMJ", "PERK - Bullet Return", "PERK - Headshot Slow", "PERK - Fast Switch", "PERK - Sleight of Hand", "PERK - Wounding", "PERK - Disable", "PERK - Full Ammo"],
        Xe = ["AMMUNITION - 10 Round Reload", "AMMUNITION - 12 Round Reload", "AMMUNITION - MIP Stopping Power Reload"],
        Ye = ["REAR GRIP - Stippled Grip Tape", "REAR GRIP - Granulated Grip Tape", "REAR GRIP - Rubberized Grip Tape"],
        xe = ["MUZZLE - OWC Light Suppressor", "MUZZLE - Monolithic Suppressor", "MUZZLE - RTC Light Muzzle Brake", "MUZZLE - Tactical Suppressor", "MUZZLE - MIP Light Flash Guard", "MUZZLE - RTC Compensator"],
        Je = ["BARREL - MIP Precise", "BARREL - MIP Steady", "BARREL - MIP Extended Light Barrel"],
        ve = ["OPTIC - Tactical Scope", "OPTIC - 4X Tactical Scope", "OPTIC - 3X Tactical Scope A", "OPTIC - 3X Tactical Scope B", "OPTIC - 3X Tactical Scope C", "OPTIC - 6X Tactical Scope B", "OPTIC - 6X Tactical Scope C"],
        we = ["STOCK - YKM Light Stock", "STOCK - OWC Skeleton Stock", "STOCK - No Stock", "STOCK - MIP Strike Stock"],
        Qe = ["PERK - FMJ", "PERK - Bullet Return", "PERK - Headshot Slow", "PERK - Fast Switch", "PERK - Sleight of Hand", "PERK - Wounding", "PERK - Disable", "PERK - Full Ammo"],
        Ve = ["UNDERBARREL - Operator Foregrip", "UNDERBARREL - Tactical Foregrip A", "UNDERBARREL - Merc Foregrip", "UNDERBARREL - Bipod", "UNDERBARREL - Strike Foregrip", "UNDERBARREL - Ranger Foregrip"],
        je = ["AMMUNITION - 15 Round Reload", "AMMUNITION - 20 Round Reload"],
        $e = ["MUZZLE - OWC Light Suppressor", "MUZZLE - Monolithic Suppressor", "MUZZLE - RTC Light Muzzle Brake", "MUZZLE - Tactical Suppressor", "MUZZLE - MIP Light Flash Guard", "MUZZLE - RTC Compensator"],
        _e = ["BARREL - .408 Standard", "BARREL - Free Floating", "BARREL - MIP Light"],
        rt = ["OPTIC - Tactical Scope", "OPTIC - 4X Tactical Scope", "OPTIC - 3X Tactical Scope A", "OPTIC - 3X Tactical Scope B", "OPTIC - 3X Tactical Scope C", "OPTIC - 6X Tactical Scope B", "OPTIC - 6X Tactical Scope C"],
        et = ["STOCK - OWC Skeleton Stock", "STOCK - MIP Strike Stock", "STOCK - OWC Ranger Stock", "STOCK - YKM Combat Stock"],
        tt = ["PERK - FMJ", "PERK - Bullet Return", "PERK - Headshot Slow", "PERK - Fast Switch", "PERK - Sleight of Hand", "PERK - Wounding", "PERK - Disable", "PERK - Full Ammo"],
        at = ["AMMUNITION - Extended Mag A", "AMMUNITION - Large Extended Mag B"],
        ot = ["MUZZLE - OWC Light Suppressor", "MUZZLE - Monolithic Suppressor", "MUZZLE - RTC Light Muzzle Brake", "MUZZLE - Tactical Suppressor", "MUZZLE - MIP Light Flash Guard", "MUZZLE - RTC Compensator"],
        it = ["BARREL - YKM Lightweight Short", "BARREL - YKM Lightweight Long", "BARREL - YKM Standard"],
        nt = ["OPTIC - Tactical Scope", "OPTIC - 4X Tactical Scope", "OPTIC - 3X Tactical Scope A", "OPTIC - 3X Tactical Scope B", "OPTIC - 3X Tactical Scope C", "OPTIC - 6X Tactical Scope B", "OPTIC - 6X Tactical Scope C"],
        lt = ["STOCK - YKM Light Stock", "STOCK - RTC Steady Stock", "STOCK - OWC Skeleton Stock"],
        Mt = ["PERK - FMJ", "PERK - Bullet Return", "PERK - Headshot Slow", "PERK - Fast Switch", "PERK - Sleight of Hand", "PERK - Wounding", "PERK - Disable", "PERK - Full Ammo"],
        Rt = ["AMMUNITION - 10 Round Reload", "AMMUNITION - 12 Round Reload", "AMMUNITION - OWC Stopping Power Reload"],
        ct = ["REAR GRIP - Stippled Grip Tape", "REAR GRIP - Granulated Grip Tape", "REAR GRIP - Rubberized Grip Tape"],
        ht = ["MUZZLE - OWC Light Suppressor", "MUZZLE - Monolithic Suppressor", "MUZZLE - RTC Light Muzzle Brake", "MUZZLE - Tactical Suppressor", "MUZZLE - MIP Light Flash Guard", "MUZZLE - RTC Compensator"],
        mt = ["BARREL - MIP Tac Long", "BARREL - MIP Memorial Cowboy", "BARREL - MIP Steady"],
        pt = ["OPTIC - Tactical Scope", "OPTIC - 4X Tactical Scope", "OPTIC - 3X Tactical Scope A", "OPTIC - 3X Tactical Scope B", "OPTIC - 3X Tactical Scope C", "OPTIC - 6X Tactical Scope B", "OPTIC - 6X Tactical Scope C"],
        St = ["STOCK - YKM Light Stock", "STOCK - OWC Skeleton Stock", "STOCK - RTC Steady Stock", "STOCK - YKM Combat Stock", "STOCK - MIP Stalker Stock"],
        dt = ["PERK - FMJ", "PERK - Bullet Return", "PERK - Headshot Slow", "PERK - Fast Switch", "PERK - Sleight of Hand", "PERK - Wounding", "PERK - Disable", "PERK - Full Ammo"],
        Lt = ["AMMUNITION - 9 Round Reload", "AMMUNITION - 12 Round Reload"],
        ut = ["REAR GRIP - Stippled Grip Tape", "REAR GRIP - Granulated Grip Tape", "REAR GRIP - Rubberized Grip Tape"],
        Tt = ["MUZZLE - OWC Light Suppressor", "MUZZLE - RTC Light Muzzle Brake", "MUZZLE - Tactical Suppressor", "MUZZLE - MIP Light Flash Guard", "MUZZLE - OWC Light Compensator"],
        Et = ["BARREL - MIP Custom Light", "BARREL - RTC Modified", "BARREL - OWC Tac Long"],
        gt = ["OPTIC - Tactical Scope", "OPTIC - 4X Tactical Scope", "OPTIC - 3X Tactical Scope A", "OPTIC - 3X Tactical Scope B", "OPTIC - 3X Tactical Scope C", "OPTIC - 6X Tactical Scope B", "OPTIC - 6X Tactical Scope C"],
        Pt = ["STOCK - YKM Light Stock", "STOCK - RTC Steady Stock", "STOCK - OWC Skeleton Stock"],
        At = ["PERK - Headshot Slow", "PERK - Fast Switch", "PERK - Sleight of Hand", "PERK - Wounding", "PERK - Disable", "PERK - Full Ammo"],
        Ot = ["UNDERBARREL - Operator Foregrip", "UNDERBARREL - Tactical Foregrip A", "UNDERBARREL - Heavy Duty Trigger", "UNDERBARREL - Merc Foregrip", "UNDERBARREL - Light Trigger", "UNDERBARREL - Bipod", "UNDERBARREL - Strike Foregrip", "UNDERBARREL - Ranger Foregrip"],
        st = ["AMMUNITION - Fragment Ammo", "AMMUNITION - High Explosive Ammo", "AMMUNITION - Electromagnetic Ammo"],
        ft = ["MUZZLE - OWC Light Suppressor", "MUZZLE - OWC Light Compensator", "MUZZLE - RTC Light Muzzle Brake", "MUZZLE - Tactical Suppressor", "MUZZLE - YKM Light Flash Guard", "MUZZLE - Monolithic Suppressor"],
        Ct = ["BARREL - Compagnie Generale Sevier - Light Barrel", "BARREL - Compagnie Generale Sevier - Short Barrel", "BARREL - MIP Extended Light Barrel"],
        It = ["STOCK - YKM Light Stock", "STOCK - RTC Steady Stock", "STOCK - YKM Combat Stock"],
        yt = ["PERK - FMJ", "PERK - Stealth Kill", "PERK - Empty Reload", "PERK - Headshot XP", "PERK - Sleight of Hand", "PERK - Full Ammo", "PERK - Disable"],
        Ut = ["LASER - RTC Laser 1mW", "LASER - MIP Laser 5mW", "LASER - OWC Laser - Tactical"],
        kt = ["UNDERBARREL - Strike Foregrip", "UNDERBARREL - Merc Foregrip", "UNDERBARREL - Operator Foregrip", "UNDERBARREL - Bipod", "UNDERBARREL - Tactical Foregrip A", "UNDERBARREL - Ranger Foregrip"],
        Bt = ["AMMUNITION - 75 Round Belt", "AMMUNITION - 100 Round Belt"],
        Gt = ["REAR GRIP - Stippled Grip Tape", "REAR GRIP - Granulated Grip Tape", "REAR GRIP - Rubberized Grip Tape"],
        Kt = ["MUZZLE - OWC Light Suppressor", "MUZZLE - OWC Light Compensator", "MUZZLE - RTC Light Muzzle Brake", "MUZZLE - Tactical Suppressor", "MUZZLE - YKM Light Flash Guard", "MUZZLE - Monolithic Suppressor"],
        Ht = ['BARREL - RTC 12.4" Light Barrel', 'BARREL - RTC 18.2" Short', 'BARREL - RTC 25.4" Extended Barrel'],
        zt = ["STOCK - YKM Light Stock", "STOCK - RTC Steady Stock", "STOCK - YKM Combat Stock"],
        Zt = ["PERK - FMJ", "PERK - Stealth Kill", "PERK - Empty Reload", "PERK - Headshot XP", "PERK - Sleight of Hand", "PERK - Full Ammo", "PERK - Disable"],
        Nt = ["LASER - RTC Laser 1mW", "LASER - MIP Laser 5mW", "LASER - OWC Laser - Tactical"],
        bt = ["UNDERBARREL - Strike Foregrip", "UNDERBARREL - Merc Foregrip", "UNDERBARREL - Operator Foregrip", "UNDERBARREL - Bipod", "UNDERBARREL - Tactical Foregrip A", "UNDERBARREL - Ranger Foregrip"],
        qt = ["AMMUNITION - 50 Round Reload", "AMMUNITION - 60 Round Reload"],
        Dt = ["REAR GRIP - Stippled Grip Tape", "REAR GRIP - Granulated Grip Tape", "REAR GRIP - Rubberized Grip Tape"],
        Ft = ["MUZZLE - OWC Light Suppressor", "MUZZLE - OWC Light Compensator", "MUZZLE - RTC Light Muzzle Brake", "MUZZLE - Tactical Suppressor", "MUZZLE - Monolithic Suppressor"],
        Wt = ["BARREL - OWC Heavy Barrel", "BARREL - OWC Compact Barrel", "BARREL - OWC Extended Barrel"],
        Xt = ["STOCK - YKM Light Stock", "STOCK - RTC Steady Stock", "STOCK - YKM Combat Stock", "STOCK - No Stock"],
        Yt = ["PERK - FMJ", "PERK - Stealth Kill", "PERK - Empty Reload", "PERK - Headshot XP", "PERK - Sleight of Hand", "PERK - Full Ammo", "PERK - Disable", "PERK - Wounding"],
        xt = ["LASER - RTC Laser 1mW", "LASER - MIP Laser 5mW", "LASER - OWC Laser - Tactical"],
        Jt = ["UNDERBARREL - Strike Foregrip", "UNDERBARREL - Merc Foregrip", "UNDERBARREL - Operator Foregrip", "UNDERBARREL - Bipod", "UNDERBARREL - Tactical Foregrip A", "UNDERBARREL - Snatch Foregrip"],
        vt = ["AMMUNITION - 150 Round Belt", "AMMUNITION - 200 Round Belt"],
        wt = ["REAR GRIP - Stippled Grip Tape", "REAR GRIP - Granulated Grip Tape", "REAR GRIP - Rubberized Grip Tape"],
        Qt = ["MUZZLE - OWC Light Suppressor", "MUZZLE - OWC Light Compensator", "MUZZLE - RTC Light Muzzle Brake", "MUZZLE - Tactical Suppressor", "MUZZLE - YKM Light Flash Guard", "MUZZLE - Monolithic Suppressor"],
        Vt = ["BARREL - MIP Ultralight Barrel", "BARREL - MIP Short Barrel"],
        jt = ["STOCK - YKM Light Stock", "STOCK - RTC Steady Stock", "STOCK - YKM Combat Stock", "STOCK - No Stock"],
        $t = ["PERK - FMJ", "PERK - Stealth Kill", "PERK - Empty Reload", "PERK - Headshot XP", "PERK - Sleight of Hand", "PERK - Full Ammo", "PERK - Disable"],
        _t = ["LASER - RTC Laser 1mW", "LASER - MIP Laser 5mW", "LASER - OWC Laser - Tactical"],
        ra = ["UNDERBARREL - Strike Foregrip", "UNDERBARREL - Merc Foregrip", "UNDERBARREL - Operator Foregrip", "UNDERBARREL - Tactical Foregrip A"],
        ea = ["AMMUNITION - 30 Round Light Reload", "AMMUNITION - 40 Round Light Reload"],
        ta = ["REAR GRIP - Stippled Grip Tape", "REAR GRIP - Granulated Grip Tape", "REAR GRIP - Rubberized Grip Tape"],
        aa = ["MUZZLE - OWC Light Suppressor", "MUZZLE - OWC Light Compensator", "MUZZLE - RTC Light Muzzle Brake", "MUZZLE - Tactical Suppressor", "MUZZLE - YKM Light Flash Guard", "MUZZLE - Monolithic Suppressor"],
        oa = ["BARREL - Chopper Infantry", "BARREL - Chopper Special Forces", "BARREL - Chopper Heavy"],
        ia = ["STOCK - MIP Strike Stock", "STOCK - YKM Combat Stock", "STOCK - YKM Light Stock"],
        na = ["PERK - FMJ", "PERK - Stealth Kill", "PERK - Empty Reload", "PERK - Headshot XP", "PERK - Sleight of Hand", "PERK - Full Ammo", "PERK - Disable", "PERK - Wounding"],
        la = ["LASER - RTC Laser 1mW", "LASER - MIP Laser 5mW", "LASER - YKM Laser - Ranger", "LASER - RTC Laser - Merc", "LASER - OWC Laser - Tactical"],
        Ma = ["UNDERBARREL - Strike Foregrip", "UNDERBARREL - Merc Foregrip", "UNDERBARREL - Operator Foregrip", "UNDERBARREL - Bipod", "UNDERBARREL - Tactical Foregrip A", "UNDERBARREL - Ranger Foregrip", "UNDERBARREL - Heavy Handle"],
        Ra = ["AMMUNITION - 120 Round Reload", "AMMUNITION - 150 Round Reload"],
        ca = ["REAR GRIP - Stippled Grip Tape", "REAR GRIP - Granulated Grip Tape", "REAR GRIP - Rubberized Grip Tape"],
        ha = ["MUZZLE - OWC Light Suppressor", "MUZZLE - OWC Light Compensator", "MUZZLE - RTC Light Muzzle Brake", "MUZZLE - Tactical Suppressor", "MUZZLE - MIP Light Flash Guard", "MUZZLE - Monolithic Suppressor"],
        ma = ["BARREL - MIP Light Barrel (Short)", "BARREL - YKM Integral Suppressor Light", "BARREL - OWC Marksman"],
        pa = ["OPTIC - Classic Red Dot Sight", "OPTIC - Red Dot Sight 1", "OPTIC - Red Dot Sight 2", "OPTIC - Red Dot Sight 3", "OPTIC - Red Dot Sight 4", "OPTIC - Red Dot Sight 5", "OPTIC - Red Dot Sight 6", "OPTIC - Classic Holographic Sight", "OPTIC - Holographic Sight 1", "OPTIC - Holographic Sight 2", "OPTIC - Holographic Sight 3", "OPTIC - Tactical Scope", "OPTIC - 3X Tactical Scope 1", "OPTIC - 3X Tactical Scope 2", "OPTIC - 3X Tactical Scope 3"],
        Sa = ["STOCK - MIP Strike Stock", "STOCK - YKM Combat Stock", "STOCK - OWC Skeleton Stock", "STOCK - No Stock"],
        da = ["PERK - FMJ", "PERK - Wild Hipfire", "PERK - Double Kill", "PERK - Fast Reload Kill", "PERK - Sleight of Hand", "PERK - Full Ammo", "PERK - Disable", "PERK - Wounding"],
        La = ["LASER - RTC Laser 1mW", "LASER - MIP Laser 5mW", "LASER - OWC Laser - Tactical"],
        ua = ["UNDERBARREL - Strike Foregrip", "UNDERBARREL - Merc Foregrip", "UNDERBARREL - Operator Foregrip", "UNDERBARREL - Ranger Foregrip", "UNDERBARREL - Tactical Foregrip A"],
        Ta = ["AMMUNITION - 38 Round Extended Mag", "AMMUNITION - 50 Round Extended Mag", "AMMUNITION - 38 Round Fast Reload"],
        Ea = ["REAR GRIP - Stippled Grip Tape", "REAR GRIP - Granulated Grip Tape", "REAR GRIP - Rubberized Grip Tape"],
        ga = ["MUZZLE - OWC Light Suppressor", "MUZZLE - OWC Light Compensator", "MUZZLE - RTC Light Muzzle Brake", "MUZZLE - Tactical Suppressor", "MUZZLE - MIP Light Flash Guard", "MUZZLE - Monolithic Suppressor"],
        Pa = ["BARREL - MIP Light", "BARREL - OWC Marksman", "BARREL - YKM Integral Suppressor Light"],
        Aa = ["OPTIC - Classic Red Dot Sight", "OPTIC - Red Dot Sight 1", "OPTIC - Red Dot Sight 2", "OPTIC - Red Dot Sight 3", "OPTIC - Red Dot Sight 4", "OPTIC - Red Dot Sight 5", "OPTIC - Red Dot Sight 6", "OPTIC - Classic Holographic Sight", "OPTIC - Holographic Sight 1", "OPTIC - Holographic Sight 2", "OPTIC - Holographic Sight 3", "OPTIC - Tactical Scope", "OPTIC - 3X Tactical Scope 1", "OPTIC - 3X Tactical Scope 2", "OPTIC - 3X Tactical Scope 3"],
        Oa = ["STOCK - YKM Light Stock", "STOCK - YKM Combat Stock", "STOCK - MIP Strike Stock"],
        sa = ["PERK - FMJ", "PERK - Wild Hipfire", "PERK - Double Kill", "PERK - Fast Reload Kill", "PERK - Sleight of Hand", "PERK - Full Ammo", "PERK - Disable", "PERK - Wounding"],
        fa = ["LASER - RTC Laser 1mW", "LASER - MIP Laser 5mW", "LASER - OWC Laser - Tactical"],
        Ca = ["UNDERBARREL - Strike Foregrip", "UNDERBARREL - Merc Foregrip", "UNDERBARREL - Operator Foregrip", "UNDERBARREL - Ranger Foregrip", "UNDERBARREL - Tactical Foregrip A"],
        Ia = ["AMMUNITION - 39 Round Extended Mag", "AMMUNITION - 45 Round Extended Mag"],
        ya = ["REAR GRIP - Stippled Grip Tape", "REAR GRIP - Granulated Grip Tape", "REAR GRIP - Rubberized Grip Tape"],
        Ua = ["MUZZLE - OWC Light Suppressor", "MUZZLE - OWC Light Compensator", "MUZZLE - RTC Light Muzzle Brake", "MUZZLE - Tactical Suppressor", "MUZZLE - MIP Light Flash Guard", "MUZZLE - Monolithic Suppressor"],
        ka = ["BARREL - MIP Extended Light Barrel", "BARREL - OWC Marksman"],
        Ba = ["OPTIC - Classic Red Dot Sight", "OPTIC - Red Dot Sight 1", "OPTIC - Red Dot Sight 2", "OPTIC - Red Dot Sight 3", "OPTIC - Red Dot Sight 4", "OPTIC - Red Dot Sight 5", "OPTIC - Red Dot Sight 6", "OPTIC - Classic Holographic Sight", "OPTIC - Holographic Sight 1", "OPTIC - Holographic Sight 2", "OPTIC - Holographic Sight 3", "OPTIC - Tactical Scope", "OPTIC - 3X Tactical Scope 1", "OPTIC - 3X Tactical Scope 2", "OPTIC - 3X Tactical Scope 3"],
        Ga = ["STOCK - YKM Light Stock", "STOCK - YKM Combat Stock", "STOCK - MIP Strike Stock"],
        Ka = ["PERK - FMJ", "PERK - Wild Hipfire", "PERK - Double Kill", "PERK - Fast Reload Kill", "PERK - Sleight of Hand", "PERK - Full Ammo", "PERK - Disable", "PERK - Wounding"],
        Ha = ["LASER - RTC Laser 1mW", "LASER - MIP Laser 5mW", "LASER - OWC Laser - Tactical"],
        za = ["UNDERBARREL - Merc Foregrip", "UNDERBARREL - OWC Foregrip", "UNDERBARREL - Operator Foregrip", "UNDERBARREL - Ranger Foregrip"],
        Za = ["REAR GRIP - Stippled Grip Tape", "REAR GRIP - Granulated Grip Tape", "REAR GRIP - Rubberized Grip Tape"],
        Na = ["MUZZLE - OWC Light Suppressor", "MUZZLE - OWC Light Compensator", "MUZZLE - RTC Light Muzzle Brake", "MUZZLE - Tactical Suppressor", "MUZZLE - MIP Light Flash Guard", "MUZZLE - Monolithic Suppressor"],
        ba = ["BARREL - MIP Extended Light Barrel", "BARREL - OWC Marksman"],
        qa = ["OPTIC - Classic Red Dot Sight", "OPTIC - Red Dot Sight 1", "OPTIC - Red Dot Sight 2", "OPTIC - Red Dot Sight 3", "OPTIC - Red Dot Sight 4", "OPTIC - Red Dot Sight 5", "OPTIC - Red Dot Sight 6", "OPTIC - Classic Holographic Sight", "OPTIC - Holographic Sight 1", "OPTIC - Holographic Sight 2", "OPTIC - Tactical Scope", "OPTIC - 3X Tactical Scope 1", "OPTIC - 3X Tactical Scope 2", "OPTIC - 3X Tactical Scope 3"],
        Da = ["STOCK - YKM Light Stock", "STOCK - YKM Combat Stock", "STOCK - MIP Strike Stock"],
        Fa = ["PERK - FMJ", "PERK - Wild Hipfire", "PERK - Double Kill", "PERK - Rapid Fire", "PERK - Fast Reload Kill", "PERK - Sleight of Hand", "PERK - Full Ammo", "PERK - Disable", "PERK - Wounding"],
        Wa = ["LASER - RTC Laser 1mW", "LASER - MIP Laser 5mW", "LASER - OWC Laser - Tactical"],
        Xa = ["UNDERBARREL - Merc Foregrip", "UNDERBARREL - OWC Foregrip", "UNDERBARREL - Operator Foregrip", "UNDERBARREL - Ranger Foregrip"],
        Ya = ["REAR GRIP - Stippled Grip Tape", "REAR GRIP - Granulated Grip Tape", "REAR GRIP - Rubberized Grip Tape"],
        xa = ["MUZZLE - OWC Light Suppressor", "MUZZLE - OWC Light Compensator", "MUZZLE - RTC Light Muzzle Brake", "MUZZLE - Tactical Suppressor", "MUZZLE - MIP Light Flash Guard", "MUZZLE - Monolithic Suppressor"],
        Ja = ["BARREL - MIP Light", "BARREL - OWC Ranger", "BARREL - OWC Marksman"],
        va = ["OPTIC - Classic Red Dot Sight", "OPTIC - Red Dot Sight 1", "OPTIC - Red Dot Sight 2", "OPTIC - Red Dot Sight 3", "OPTIC - Red Dot Sight 4", "OPTIC - Red Dot Sight 5", "OPTIC - Red Dot Sight 6", "OPTIC - Classic Holographic Sight", "OPTIC - Holographic Sight 1", "OPTIC - Holographic Sight 2", "OPTIC - Holographic Sight 3", "OPTIC - Tactical Scope", "OPTIC - 3X Tactical Scope 1", "OPTIC - 3X Tactical Scope 2", "OPTIC - 3X Tactical Scope 3"],
        wa = ["STOCK - YKM Light Stock", "STOCK - YKM Combat Stock", "STOCK - MIP Strike Stock", "STOCK - No Stock"],
        Qa = ["PERK - FMJ", "PERK - Wild Hipfire", "PERK - Double Kill", "PERK - Fast Reload Kill", "PERK - Sleight of Hand", "PERK - Full Ammo", "PERK - Disable", "PERK - Wounding"],
        Va = ["LASER - RTC Laser 1mW", "LASER - MIP Laser 5mW", "LASER - OWC Laser - Tactical"],
        ja = ["UNDERBARREL - Strike Foregrip", "UNDERBARREL - Merc Foregrip", "UNDERBARREL - Operator Foregrip", "UNDERBARREL - Ranger Foregrip", "UNDERBARREL - Tactical Foregrip A"],
        $a = ["AMMUNITION - 36 Round Extended Mag", "AMMUNITION - Fast Reload", "AMMUNITION - 30 Round Fast Reload"],
        _a = ["REAR GRIP - Stippled Grip Tape", "REAR GRIP - Granulated Grip Tape", "REAR GRIP - Rubberized Grip Tape"],
        ro = ["MUZZLE - OWC Light Suppressor", "MUZZLE - OWC Light Compensator", "MUZZLE - RTC Light Muzzle Brake", "MUZZLE - Tactical Suppressor", "MUZZLE - MIP Light Flash Guard", "MUZZLE - Monolithic Suppressor"],
        eo = ["BARREL - MIP Light Barrel (Short)", "BARREL - YKM Integral Suppressor", "BARREL - OWC Marksman"],
        to = ["OPTIC - Classic Red Dot Sight", "OPTIC - Red Dot Sight 1", "OPTIC - Red Dot Sight 2", "OPTIC - Red Dot Sight 3", "OPTIC - Red Dot Sight 4", "OPTIC - Red Dot Sight 5", "OPTIC - Red Dot Sight 6", "OPTIC - Classic Holographic Sight", "OPTIC - Holographic Sight 1", "OPTIC - Holographic Sight 2", "OPTIC - Holographic Sight 3", "OPTIC - Tactical Scope", "OPTIC - 3X Tactical Scope 1", "OPTIC - 3X Tactical Scope 2", "OPTIC - 3X Tactical Scope 3"],
        ao = ["STOCK - YKM Light Stock", "STOCK - RTC Steady Stock", "STOCK - YKM Combat Stock", "STOCK - OWC Skeleton Stock", "STOCK - No Stock"],
        oo = ["PERK - FMJ", "PERK - Wild Hipfire", "PERK - Double Kill", "PERK - Fast Reload Kill", "PERK - Sleight of Hand", "PERK - Full Ammo", "PERK - Disable", "PERK - Wounding"],
        io = ["LASER - RTC Laser 1mW", "LASER - MIP Laser 5mW", "LASER - OWC Laser - Tactical"],
        no = ["UNDERBARREL - Strike Foregrip", "UNDERBARREL - Merc Foregrip", "UNDERBARREL - Operator Foregrip", "UNDERBARREL - Ranger Foregrip", "UNDERBARREL - Tactical Foregrip A"],
        lo = ["AMMUNITION - 40 Round Extended Mag", "AMMUNITION - 40 Round Fast Reload", "AMMUNITION - 45 Round Fast Reload"],
        Mo = ["REAR GRIP - Stippled Grip Tape", "REAR GRIP - Granulated Grip Tape", "REAR GRIP - Rubberized Grip Tape"],
        Ro = ["MUZZLE - OWC Light Suppressor", "MUZZLE - OWC Light Compensator", "MUZZLE - RTC Light Muzzle Brake", "MUZZLE - Tactical Suppressor", "MUZZLE - MIP Light Flash Guard", "MUZZLE - Monolithic Suppressor"],
        co = ["BARREL - MIP Light Barrel (Short)", "BARREL - MIP Light", "BARREL - OWC Marksman"],
        ho = ["OPTIC - Classic Red Dot Sight", "OPTIC - Red Dot Sight 1", "OPTIC - Red Dot Sight 2", "OPTIC - Red Dot Sight 3", "OPTIC - Red Dot Sight 4", "OPTIC - Red Dot Sight 5", "OPTIC - Red Dot Sight 6", "OPTIC - Classic Holographic Sight", "OPTIC - Holographic Sight 1", "OPTIC - Holographic Sight 2", "OPTIC - Holographic Sight 3", "OPTIC - Tactical Scope", "OPTIC - 3X Tactical Scope 1", "OPTIC - 3X Tactical Scope 2", "OPTIC - 3X Tactical Scope 3"],
        mo = ["STOCK - YKM Light Stock", "STOCK - MIP Strike Stock", "STOCK - YKM Combat Stock"],
        po = ["PERK - FMJ", "PERK - Wild Hipfire", "PERK - Double Kill", "PERK - Fast Reload Kill", "PERK - Sleight of Hand", "PERK - Full Ammo", "PERK - Disable", "PERK - Wounding"],
        So = ["LASER - RTC Laser 1mW", "LASER - MIP Laser 5mW", "LASER - OWC Laser - Tactical"],
        Lo = ["UNDERBARREL - Strike Foregrip", "UNDERBARREL - Merc Foregrip", "UNDERBARREL - Operator Foregrip", "UNDERBARREL - Ranger Foregrip", "UNDERBARREL - Tactical Foregrip A"],
        uo = ["AMMUNITION - Fast Reload", "AMMUNITION - 44 Round Extended Mag", "AMMUNITION - 36 Round Fast Reload"],
        To = ["REAR GRIP - Stippled Grip Tape", "REAR GRIP - Granulated Grip Tape", "REAR GRIP - Rubberized Grip Tape"],
        Eo = ["MUZZLE - OWC Light Suppressor", "MUZZLE - OWC Light Compensator", "MUZZLE - RTC Light Muzzle Brake", "MUZZLE - Tactical Suppressor", "MUZZLE - MIP Light Flash Guard", "MUZZLE - Monolithic Suppressor"],
        go = ["BARREL - MIP Light Barrel (Short)", "BARREL - YKM Integral Suppressor", "BARREL - OWC Marksman"],
        Po = ["OPTIC - Classic Red Dot Sight", "OPTIC - Red Dot Sight 1", "OPTIC - Red Dot Sight 2", "OPTIC - Red Dot Sight 3", "OPTIC - Red Dot Sight 4", "OPTIC - Red Dot Sight 5", "OPTIC - Red Dot Sight 6", "OPTIC - Classic Holographic Sight", "OPTIC - Holographic Sight 1", "OPTIC - Holographic Sight 2", "OPTIC - Holographic Sight 3", "OPTIC - Tactical Scope", "OPTIC - 3X Tactical Scope 1", "OPTIC - 3X Tactical Scope 2", "OPTIC - 3X Tactical Scope 3"],
        Ao = ["STOCK - YKM Light Stock", "STOCK - RTC Steady Stock", "STOCK - YKM Combat Stock"],
        Oo = ["PERK - FMJ", "PERK - Wild Hipfire", "PERK - Double Kill", "PERK - Fast Reload Kill", "PERK - Sleight of Hand", "PERK - Full Ammo", "PERK - Disable", "PERK - Wounding"],
        so = ["LASER - RTC Laser 1mW", "LASER - MIP Laser 5mW", "LASER - OWC Laser - Tactical"],
        fo = ["UNDERBARREL - Strike Foregrip", "UNDERBARREL - Merc Foregrip", "UNDERBARREL - Operator Foregrip", "UNDERBARREL - Ranger Foregrip", "UNDERBARREL - Tactical Foregrip A"],
        Co = ["AMMUNITION - 40 Round Extended Mag", "AMMUNITION - 45 Round Extended Mag", "AMMUNITION - 32 Round Fast Reload"],
        Io = ["REAR GRIP - Stippled Grip Tape", "REAR GRIP - Granulated Grip Tape", "REAR GRIP - Rubberized Grip Tape"],
        yo = ["MUZZLE - OWC Light Suppressor", "MUZZLE - OWC Light Compensator", "MUZZLE - RTC Light Muzzle Brake", "MUZZLE - Tactical Suppressor", "MUZZLE - MIP Light Flash Guard", "MUZZLE - Monolithic Suppressor"],
        Uo = ["BARREL - MIP Extended Light Barrel", "BARREL - OWC Marksman"],
        ko = ["OPTIC - Classic Red Dot Sight", "OPTIC - Red Dot Sight 1", "OPTIC - Red Dot Sight 2", "OPTIC - Red Dot Sight 3", "OPTIC - Red Dot Sight 4", "OPTIC - Red Dot Sight 5", "OPTIC - Red Dot Sight 6", "OPTIC - Classic Holographic Sight", "OPTIC - Holographic Sight 1", "OPTIC - Holographic Sight 2", "OPTIC - Holographic Sight 3", "OPTIC - Tactical Scope", "OPTIC - 3X Tactical Scope 1", "OPTIC - 3X Tactical Scope 2", "OPTIC - 3X Tactical Scope 3"],
        Bo = ["STOCK - YKM Light Stock", "STOCK - MIP Strike Stock", "STOCK - YKM Combat Stock"],
        Go = ["PERK - FMJ", "PERK - Wild Hipfire", "PERK - Double Kill", "PERK - Fast Reload Kill", "PERK - Sleight of Hand", "PERK - Full Ammo", "PERK - Disable", "PERK - Wounding"],
        Ko = ["LASER - RTC Laser 1mW", "LASER - MIP Laser 5mW", "LASER - OWC Laser - Tactical"],
        Ho = ["UNDERBARREL - Merc Foregrip", "UNDERBARREL - Operator Foregrip", "UNDERBARREL - Ranger Foregrip", "UNDERBARREL - OWC Foregrip"],
        zo = ["AMMUNITION - 48 Round Extended Mag", "AMMUNITION - 56 Round Extended Mag"],
        Zo = ["REAR GRIP - Stippled Grip Tape", "REAR GRIP - Granulated Grip Tape", "REAR GRIP - Rubberized Grip Tape"],
        No = ["MUZZLE - OWC Light Suppressor", "MUZZLE - OWC Light Compensator", "MUZZLE - RTC Light Muzzle Brake", "MUZZLE - Tactical Suppressor", "MUZZLE - MIP Light Flash Guard", "MUZZLE - Monolithic Suppressor"],
        bo = ["BARREL - MIP Customized Light Barrel", "BARREL - RTC Recon Tac Long", "BARREL - MIP Tactical Barrel", "BARREL - Monolithic Integral Suppressor"],
        qo = ["OPTIC - Classic Red Dot Sight", "OPTIC - Red Dot Sight 1", "OPTIC - Red Dot Sight 2", "OPTIC - Red Dot Sight 3", "OPTIC - Red Dot Sight 4", "OPTIC - Red Dot Sight 5", "OPTIC - Red Dot Sight 6", "OPTIC - Classic Holographic Sight", "OPTIC - Holographic Sight 1", "OPTIC - Holographic Sight 2", "OPTIC - Holographic Sight 3", "OPTIC - Tactical Scope", "OPTIC - 3X Tactical Scope 1", "OPTIC - 3X Tactical Scope 2", "OPTIC - 3X Tactical Scope 3"],
        Do = ["STOCK - YKM Light Stock", "STOCK - MIP Strike Stock", "STOCK - YKM Combat Stock", "STOCK - No Stock"],
        Fo = ["PERK - FMJ", "PERK - Wild Hipfire", "PERK - Double Kill", "PERK - Fast Reload Kill", "PERK - Sleight of Hand", "PERK - Full Ammo", "PERK - Disable", "PERK - Wounding"],
        Wo = ["LASER - RTC Laser 1mW", "LASER - MIP Laser 5mW", "LASER - OWC Laser - Tactical"],
        Xo = ["UNDERBARREL - Strike Foregrip", "UNDERBARREL - Merc Foregrip", "UNDERBARREL - Operator Foregrip", "UNDERBARREL - Ranger Foregrip", "UNDERBARREL - Tactical Foregrip A"],
        Yo = ["AMMUNITION - 45 Round Extended Mag", "AMMUNITION - Fast Reload", "AMMUNITION - 10mm 30 Round Reload"],
        xo = ["REAR GRIP - Stippled Grip Tape", "REAR GRIP - Granulated Grip Tape", "REAR GRIP - Rubberized Grip Tape"],
        Jo = ["MUZZLE - OWC Light Suppressor", "MUZZLE - OWC Light Compensator", "MUZZLE - RTC Light Muzzle Brake", "MUZZLE - Tactical Suppressor", "MUZZLE - MIP Light Flash Guard", "MUZZLE - Monolithic Suppressor"],
        vo = ["BARREL - MIP Extended Light Barrel", "BARREL - MIP Light", "BARREL - MIP Light Barrel (Short)", "BARREL - YKM Integral Suppressor Light"],
        wo = ["OPTIC - Classic Red Dot Sight", "OPTIC - Red Dot Sight 1", "OPTIC - Red Dot Sight 2", "OPTIC - Red Dot Sight 3", "OPTIC - Red Dot Sight 4", "OPTIC - Red Dot Sight 5", "OPTIC - Red Dot Sight 6", "OPTIC - Classic Holographic Sight", "OPTIC - Holographic Sight 1", "OPTIC - Holographic Sight 2", "OPTIC - Holographic Sight 3", "OPTIC - Tactical Scope", "OPTIC - 3X Tactical Scope 1", "OPTIC - 3X Tactical Scope 2", "OPTIC - 3X Tactical Scope 3"],
        Qo = ["STOCK - YKM Light Stock", "STOCK - RTC Steady Stock", "STOCK - YKM Combat Stock", "STOCK - No Stock"],
        Vo = ["PERK - FMJ", "PERK - Wild Hipfire", "PERK - Double Kill", "PERK - Fast Reload Kill", "PERK - Sleight of Hand", "PERK - Full Ammo", "PERK - Disable", "PERK - Akimbo", "PERK - Wounding"],
        jo = ["LASER - RTC Laser 1mW", "LASER - MIP Laser 5mW", "LASER - OWC Laser - Tactical", "LASER - YKM Laser - Ranger", "LASER - RTC Laser - Merc"],
        $o = ["UNDERBARREL - Strike Foregrip", "UNDERBARREL - Merc Foregrip", "UNDERBARREL - Operator Foregrip", "UNDERBARREL - Ranger Foregrip", "UNDERBARREL - Tactical Foregrip A"],
        _o = ["AMMUNITION - Extended Mag A", "AMMUNITION - Fast Reload", "AMMUNITION - Light Mag"],
        ri = ["REAR GRIP - Stippled Grip Tape", "REAR GRIP - Granulated Grip Tape", "REAR GRIP - Rubberized Grip Tape"],
        ei = ["MUZZLE - OWC Light Suppressor", "MUZZLE - OWC Light Compensator", "MUZZLE - RTC Light Muzzle Brake", "MUZZLE - Tactical Suppressor", "MUZZLE - MIP Light Flash Guard", "MUZZLE - Monolithic Suppressor"],
        ti = ["BARREL - MIP Extended Light Barrel", "BARREL - MIP Light", "BARREL - OWC Marksman"],
        ai = ["OPTIC - Classic Red Dot Sight", "OPTIC - Red Dot Sight 1", "OPTIC - Red Dot Sight 2", "OPTIC - Red Dot Sight 3", "OPTIC - Red Dot Sight 4", "OPTIC - Red Dot Sight 5", "OPTIC - Red Dot Sight 6", "OPTIC - Classic Holographic Sight", "OPTIC - Holographic Sight 1", "OPTIC - Holographic Sight 2", "OPTIC - Holographic Sight 3", "OPTIC - Tactical Scope", "OPTIC - 3X Tactical Scope 1", "OPTIC - 3X Tactical Scope 2", "OPTIC - 3X Tactical Scope 3"],
        oi = ["STOCK - YKM Light Stock", "STOCK - RTC Steady Stock", "STOCK - YKM Combat Stock"],
        ii = ["PERK - FMJ", "PERK - Wild Hipfire", "PERK - Double Kill", "PERK - Fast Reload Kill", "PERK - Sleight of Hand", "PERK - Full Ammo", "PERK - Disable", "PERK - Wounding"],
        ni = ["LASER - RTC Laser 1mW", "LASER - MIP Laser 5mW", "LASER - OWC Laser - Tactical"],
        li = ["UNDERBARREL - Strike Foregrip", "UNDERBARREL - Merc Foregrip", "UNDERBARREL - Operator Foregrip", "UNDERBARREL - Ranger Foregrip", "UNDERBARREL - Tactical Foregrip A"],
        Mi = ["AMMUNITION - Extended Mag A", "AMMUNITION - 30 Round 5.56mm Mag", "AMMUNITION - 60 Round 5.56mm Reload"],
        Ri = ["REAR GRIP - Stippled Grip Tape", "REAR GRIP - Granulated Grip Tape", "REAR GRIP - Rubberized Grip Tape"],
        ci = ["MUZZLE - OWC Light Suppressor", "MUZZLE - OWC Light Compensator", "MUZZLE - RTC Light Muzzle Brake", "MUZZLE - Tactical Suppressor", "MUZZLE - MIP Light Flash Guard", "MUZZLE - Monolithic Suppressor"],
        hi = ["BARREL - MIP Light", "BARREL - MIP Light Barrel (Short)", "BARREL - OWC Marksman"],
        mi = ["OPTIC - Classic Red Dot Sight", "OPTIC - Red Dot Sight 1", "OPTIC - Red Dot Sight 2", "OPTIC - Red Dot Sight 3", "OPTIC - Red Dot Sight 4", "OPTIC - Red Dot Sight 5", "OPTIC - Red Dot Sight 6", "OPTIC - Classic Holographic Sight", "OPTIC - Holographic Sight 1", "OPTIC - Holographic Sight 2", "OPTIC - Holographic Sight 3", "OPTIC - Tactical Scope", "OPTIC - 3X Tactical Scope 1", "OPTIC - 3X Tactical Scope 2", "OPTIC - 3X Tactical Scope 3"],
        pi = ["STOCK - YKM Light Stock", "STOCK - MIP Strike Stock", "STOCK - YKM Combat Stock", "STOCK - No Stock"],
        Si = ["PERK - FMJ", "PERK - Wild Hipfire", "PERK - Enhanced Bolt", "PERK - Double Kill", "PERK - Fast Reload Kill", "PERK - Sleight of Hand", "PERK - Full Ammo", "PERK - Disable", "PERK - Wounding"],
        di = ["LASER - RTC Laser 1mW", "LASER - MIP Laser 5mW", "LASER - OWC Laser - Tactical"],
        Li = ["UNDERBARREL - Strike Foregrip", "UNDERBARREL - Merc Foregrip", "UNDERBARREL - Operator Foregrip", "UNDERBARREL - Ranger Foregrip", "UNDERBARREL - Tactical Foregrip A"],
        ui = ["AMMUNITION - Extended Mag A", "AMMUNITION - Fast Reload"],
        Ti = ["REAR GRIP - Stippled Grip Tape", "REAR GRIP - Granulated Grip Tape", "REAR GRIP - Rubberized Grip Tape"],
        Ei = ["MUZZLE - OWC Light Compensator", "MUZZLE - RTC Light Muzzle Brake", "MUZZLE - Tactical Suppressor", "MUZZLE - Flash Guard", "MUZZLE - Choke", "MUZZLE - Monolithic Suppressor"],
        gi = ["BARREL - YKM Light Barrel (Long)", "BARREL - YKM Light Barrel (Short)", "BARREL - YKM Heavy Barrel"],
        Pi = ["OPTIC - Classic Red Dot Sight", "OPTIC - Red Dot Sight 2", "OPTIC - Red Dot Sight 3", "OPTIC - Red Dot Sight 4", "OPTIC - Red Dot Sight 5", "OPTIC - Red Dot Sight 6", "OPTIC - Classic Holographic Sight", "OPTIC - Holographic Sight 1", "OPTIC - Holographic Sight 2", "OPTIC - Holographic Sight 3", "OPTIC - Tactical Scope", "OPTIC - 3X Tactical Scope 1", "OPTIC - 3X Tactical Scope 2", "OPTIC - 3X Tactical Scope 3"],
        Ai = ["STOCK - MIP Stalker Stock", "STOCK - YKM Light Stock", "STOCK - YKM Combat Stock"],
        Oi = ["PERK - Sleight of Hand", "PERK - Speed Up Kill", "PERK - Slide Flak Jacket", "PERK - Wounding", "PERK - Full Ammo", "PERK - Disable"],
        si = ["LASER - RTC Laser 1mW", "LASER - MIP Laser 5mW", "LASER - OWC Laser - Tactical"],
        fi = ["UNDERBARREL - Strike Foregrip", "UNDERBARREL - Merc Foregrip"],
        Ci = ["AMMUNITION - 20 Round Extended Reload Case", "AMMUNITION - 28 Round Extended Reload Case", "AMMUNITION - FF Birdshot"],
        Ii = ["REAR GRIP - Stippled Grip Tape", "REAR GRIP - Granulated Grip Tape", "REAR GRIP - Rubberized Grip Tape"],
        yi = ["MUZZLE - Tactical Suppressor", "MUZZLE - OWC Light Compensator", "MUZZLE - Choke", "MUZZLE - RTC Light Muzzle Brake", "MUZZLE - Marauder Suppressor", "MUZZLE - Monolithic Suppressor", "MUZZLE - Flash Guard"],
        Ui = ["BARREL - RTC Extended Light Barrel", "BARREL - Sawed-Off Barrel (-3 Ammo)", "BARREL - Extended Barrel (+2)"],
        ki = ["OPTIC - Classic Red Dot Sight", "OPTIC - Red Dot Sight 2", "OPTIC - Red Dot Sight 3", "OPTIC - Red Dot Sight 4", "OPTIC - Red Dot Sight 5", "OPTIC - Red Dot Sight 6", "OPTIC - Classic Holographic Sight", "OPTIC - Holographic Sight 1", "OPTIC - Holographic Sight 2", "OPTIC - Holographic Sight 3", "OPTIC - Tactical Scope", "OPTIC - 3X Tactical Scope 1", "OPTIC - 3X Tactical Scope 2", "OPTIC - 3X Tactical Scope 3"],
        Bi = ["STOCK - YKM Light Stock", "STOCK - YKM Combat Stock", "STOCK - RTC Steady Stock", "STOCK - OWC Ranger Stock", "STOCK - No Stock"],
        Gi = ["PERK - Sleight of Hand", "PERK - Speed Up Kill", "PERK - Slide Flak Jacket", "PERK - Wounding", "PERK - Full Ammo", "PERK - Disable"],
        Ki = ["LASER - RTC Laser 1mW", "LASER - MIP Laser 5mW", "LASER - OWC Laser - Tactical"],
        Hi = ["UNDERBARREL - Strike Foregrip", "UNDERBARREL - Merc Foregrip", "UNDERBARREL - Operator Foregrip", "UNDERBARREL - Tactical Foregrip A", "UNDERBARREL - Tactical Guard", "UNDERBARREL - Steady Guard"],
        zi = ["AMMUNITION - Long Ammo Tube (+2)", "AMMUNITION - 500gr Slug"],
        Zi = ["REAR GRIP - Stippled Grip Tape", "REAR GRIP - Granulated Grip Tape", "REAR GRIP - Rubberized Grip Tape"],
        Ni = ["MUZZLE - OWC Light Compensator", "MUZZLE - RTC Light Muzzle Brake", "MUZZLE - Tactical Suppressor", "MUZZLE - Flash Guard", "MUZZLE - Choke", "MUZZLE - Monolithic Suppressor"],
        bi = ["BARREL - RTC Extended Light Barrel", "BARREL - Sawed-Off Barrel (-3 Ammo)"],
        qi = ["OPTIC - Classic Red Dot Sight", "OPTIC - Red Dot Sight 2", "OPTIC - Red Dot Sight 3", "OPTIC - Red Dot Sight 4", "OPTIC - Red Dot Sight 5", "OPTIC - Red Dot Sight 6", "OPTIC - Classic Holographic Sight", "OPTIC - Holographic Sight 1", "OPTIC - Holographic Sight 2", "OPTIC - Holographic Sight 3", "OPTIC - Tactical Scope", "OPTIC - 3X Tactical Scope 1", "OPTIC - 3X Tactical Scope 2", "OPTIC - 3X Tactical Scope 3"],
        Di = ["STOCK - YKM Light Stock", "STOCK - No Stock"],
        Fi = ["PERK - Sleight of Hand", "PERK - Speed Up Kill", "PERK - Slide Flak Jacket", "PERK - Wounding", "PERK - Full Ammo", "PERK - Disable"],
        Wi = ["LASER - RTC Laser 1mW", "LASER - MIP Laser 5mW", "LASER - OWC Laser - Tactical"],
        Xi = ["UNDERBARREL - Strike Foregrip", "UNDERBARREL - Merc Foregrip"],
        Yi = ["AMMUNITION - Long Ammo Tube (+2)", "AMMUNITION - 500gr Slug"],
        xi = ["REAR GRIP - Stippled Grip Tape", "REAR GRIP - Granulated Grip Tape", "REAR GRIP - Rubberized Grip Tape"],
        Ji = ["MUZZLE - OWC Light Compensator", "MUZZLE - RTC Light Muzzle Brake", "MUZZLE - Tactical Suppressor", "MUZZLE - Flash Guard", "MUZZLE - Choke", "MUZZLE - Monolithic Suppressor"],
        vi = ["BARREL - Light Barrel (Long)", "BARREL - Light Barrel (Short)", "BARREL - OWC Customized Heavy Barrel"],
        wi = ["OPTIC - Classic Red Dot Sight", "OPTIC - Red Dot Sight 2", "OPTIC - Red Dot Sight 3", "OPTIC - Red Dot Sight 4", "OPTIC - Red Dot Sight 5", "OPTIC - Red Dot Sight 6", "OPTIC - Classic Holographic Sight", "OPTIC - Holographic Sight 1", "OPTIC - Holographic Sight 2", "OPTIC - Holographic Sight 3", "OPTIC - Tactical Scope", "OPTIC - 3X Tactical Scope 1", "OPTIC - 3X Tactical Scope 2", "OPTIC - 3X Tactical Scope 3"],
        Qi = ["STOCK - MIP Stalker Stock", "STOCK - YKM Light Stock", "STOCK - YKM Combat Stock"],
        Vi = ["PERK - Sleight of Hand", "PERK - Speed Up Kill", "PERK - Slide Flak Jacket", "PERK - Wounding", "PERK - Full Ammo", "PERK - Disable"],
        ji = ["LASER - RTC Laser 1mW", "LASER - MIP Laser 5mW", "LASER - OWC Laser - Tactical"],
        $i = ["UNDERBARREL - Strike Foregrip", "UNDERBARREL - Merc Foregrip"],
        _i = ["AMMUNITION - 16 Round Extended Reload Case", "AMMUNITION - Fast Reload Reload Case", "AMMUNITION - 500gr Slug"],
        rn = ["REAR GRIP - Stippled Grip Tape", "REAR GRIP - Granulated Grip Tape", "REAR GRIP - Rubberized Grip Tape"],
        en = ["MUZZLE - OWC Light Compensator", "MUZZLE - RTC Light Muzzle Brake", "MUZZLE - Tactical Suppressor", "MUZZLE - Flash Guard", "MUZZLE - Choke", "MUZZLE - Monolithic Suppressor", "MUZZLE - Marauder Suppressor"],
        tn = ["BARREL - RTC Light Extended Barrel", "BARREL - Sawed-Off Barrel(-3 Ammo)", "BARREL - Extended Barrel (+2)"],
        an = ["OPTIC - Classic Red Dot Sight", "OPTIC - Red Dot Sight 2", "OPTIC - Red Dot Sight 3", "OPTIC - Red Dot Sight 4", "OPTIC - Red Dot Sight 5", "OPTIC - Red Dot Sight 6", "OPTIC - Classic Holographic Sight", "OPTIC - Holographic Sight 1", "OPTIC - Holographic Sight 2", "OPTIC - Holographic Sight 3", "OPTIC - Tactical Scope", "OPTIC - 3X Tactical Scope 1", "OPTIC - 3X Tactical Scope 2", "OPTIC - 3X Tactical Scope 3"],
        on = ["STOCK - MIP Stalker Stock", "STOCK - YKM Light Stock", "STOCK - YKM Combat Stock", "STOCK - RTC Steady Stock", "STOCK - No Stock"],
        nn = ["PERK - Sleight of Hand", "PERK - Speed Up Kill", "PERK - Slide Flak Jacket", "PERK - Wounding", "PERK - Full Ammo", "PERK - Disable"],
        ln = ["LASER - RTC Laser 1mW", "LASER - MIP Laser 5mW", "LASER - OWC Laser - Tactical"],
        Mn = ["UNDERBARREL - Strike Foregrip", "UNDERBARREL - Merc Foregrip", "UNDERBARREL - Operator Foregrip", "UNDERBARREL - Tactical Foregrip A"],
        Rn = ["AMMUNITION - Long Ammo Tube (+2)", "AMMUNITION - 500gr Slug"],
        cn = ["REAR GRIP - Stippled Grip Tape", "REAR GRIP - Granulated Grip Tape", "REAR GRIP - Rubberized Grip Tape"],
        hn = ["MUZZLE - OWC Light Compensator", "MUZZLE - RTC Light Muzzle Brake", "MUZZLE - Tactical Suppressor", "MUZZLE - Flash Guard", "MUZZLE - Choke", "MUZZLE - Monolithic Suppressor"],
        mn = ["BARREL - MIP Extended Light Barrel", "BARREL - MIP Light Barrel (Short)", "BARREL - OWC Marksman"],
        pn = ["OPTIC - Classic Red Dot Sight", "OPTIC - Red Dot Sight 2", "OPTIC - Red Dot Sight 3", "OPTIC - Red Dot Sight 4", "OPTIC - Red Dot Sight 5", "OPTIC - Red Dot Sight 6", "OPTIC - Classic Holographic Sight", "OPTIC - Holographic Sight 1", "OPTIC - Holographic Sight 2", "OPTIC - Holographic Sight 3", "OPTIC - Tactical Scope", "OPTIC - 3X Tactical Scope 1", "OPTIC - 3X Tactical Scope 2", "OPTIC - 3X Tactical Scope 3"],
        Sn = ["STOCK - MIP Stalker Stock", "STOCK - YKM Light Stock", "STOCK - YKM Combat Stock", "STOCK - No Stock"],
        dn = ["PERK - Sleight of Hand", "PERK - Speed Up Kill", "PERK - Slide Flak Jacket", "PERK - Wounding", "PERK - Full Ammo", "PERK - Disable"],
        Ln = ["LASER - RTC Laser 1mW", "LASER - MIP Laser 5mW", "LASER - OWC Laser - Tactical"],
        un = ["UNDERBARREL - Operator Foregrip", "UNDERBARREL - Merc Foregrip"],
        Tn = ["AMMUNITION - Extended Mag C", "AMMUNITION - Large Extended Mag D", "AMMUNITION - Slug Reload"],
        En = ["REAR GRIP - Stippled Grip Tape", "REAR GRIP - Granulated Grip Tape", "REAR GRIP - Rubberized Grip Tape"],
        gn = ["MUZZLE - OWC Light Suppressor", "MUZZLE - RTC Compensator", "MUZZLE - MIP Light Flash Guard", "MUZZLE - RTC Light Muzzle Brake", "MUZZLE - Tactical Suppressor", "MUZZLE - Monolithic Suppressor"],
        Pn = ["BARREL - MIP Extended Light Barrel", "BARREL - OWC Marksman", "BARREL - OWC Ranger"],
        An = ["OPTIC - Tactical Scope", "OPTIC - 4X Tactical Scope", "OPTIC - 3X Tactical Scope 1", "OPTIC - 3X Tactical Scope 2", "OPTIC - 3X Tactical Scope 3", "OPTIC - 6X Tactical Scope 2", "OPTIC - 6X Tactical Scope 3"],
        On = ["STOCK - YKM Light Stock", "STOCK - YKM Combat Stock", "STOCK - RTC Steady Stock"],
        sn = ["PERK - FMJ", "PERK - Sleight of Hand", "PERK - Wounding", "PERK - Full Ammo", "PERK - Bullet Return", "PERK - Headshot Slow", "PERK - Fast Switch", "PERK - Disable"],
        fn = ["AMMUNITION - Fast Reload", "AMMUNITION - Thermite Reload", "AMMUNITION - OWC Stopping Power Reload"],
        Cn = ["REAR GRIP - Stippled Grip Tape", "REAR GRIP - Granulated Grip Tape", "REAR GRIP - Rubberized Grip Tape"],
        In = ["MUZZLE - OWC Light Suppressor", "MUZZLE - RTC Light Muzzle Brake", "MUZZLE - MIP Light Flash Guard", "MUZZLE - Tactical Suppressor", "MUZZLE - Monolithic Suppressor"],
        yn = ["BARREL - MIP Extended Light Barrel", "BARREL - OWC Marksman", "BARREL - MIP Light"],
        Un = ["OPTIC - Tactical Scope", "OPTIC - 4X Tactical Scope", "OPTIC - 3X Tactical Scope 1", "OPTIC - 3X Tactical Scope 2", "OPTIC - 3X Tactical Scope 3", "OPTIC - 6X Tactical Scope 2", "OPTIC - 6X Tactical Scope 3"],
        kn = ["STOCK - No Stock", "STOCK - OWC Ranger Stock", "STOCK - RTC Steady Stock"],
        Bn = ["PERK - FMJ", "PERK - Sleight of Hand", "PERK - Wounding", "PERK - Full Ammo", "PERK - Bullet Return", "PERK - Headshot Slow", "PERK - Fast Switch", "PERK - Disable"],
        Gn = ["UNDERBARREL - Bipod", "UNDERBARREL - Strike Foregrip", "UNDERBARREL - Merc Foregrip", "UNDERBARREL - Tactical Foregrip A", "UNDERBARREL - Operator Foregrip", "UNDERBARREL - Ranger Foregrip"],
        Kn = ["AMMUNITION - 30 Round Extended Mag", "AMMUNITION - 10 Round Light Reload"],
        Hn = ["REAR GRIP - Stippled Grip Tape", "REAR GRIP - Granulated Grip Tape", "REAR GRIP - Rubberized Grip Tape"],
        zn = ["MUZZLE - RTC Light Muzzle Brake", "MUZZLE - MIP Light Flash Guard", "MUZZLE - OWC Light Compensator"],
        Zn = ["BARREL - J358 Custom Light", "BARREL - J358 Long", "BARREL - J358 Short"],
        Nn = ["OPTIC - Holographic Sight 2", "OPTIC - Classic Red Dot Sight", "OPTIC - Red Dot Sight 2", "OPTIC - Classic Holographic Sight", "OPTIC - Holographic Sight 1", "OPTIC - Red Dot Sight 3", "OPTIC - Holographic Sight 3", "OPTIC - Red Dot Sight 1", "OPTIC - Red Dot Sight 4", "OPTIC - Red Dot Sight 5", "OPTIC - 3X Tactical Scope 2", "OPTIC - Red Dot Sight 6", "OPTIC - 4X Tactical Scope"],
        bn = ["PERK - Full Ammo", "PERK - FMJ", "PERK - Wounding", "PERK - Disable", "PERK - Sleight of Hand"],
        qn = ["LASER - RTC Laser 1mW", "LASER - MIP Laser 5mW", "LASER - OWC Laser - Tactical"],
        Dn = ["TRIGGER ACTION - Heavy Duty Trigger", "TRIGGER ACTION - Match Grade Trigger", "TRIGGER ACTION - Lightweight Trigger"],
        Fn = ["AMMUNITION - 8 Round Reload", "AMMUNITION - Stopping Power Reload"],
        Wn = ["REAR GRIP - Stippled Grip Tape", "REAR GRIP - Granulated Grip Tape", "REAR GRIP - Rubberized Grip Tape", "REAR GRIP - Shoulder Stock - Tactical", "REAR GRIP - Shoulder Stock - Wood"],
        Xn = ["MUZZLE - OWC Light Suppressor", "MUZZLE - OWC Light Compensator", "MUZZLE - RTC Light Muzzle Brake", "MUZZLE - Tactical Suppressor", "MUZZLE - MIP Light Flash Guard", "MUZZLE - Monolithic Suppressor"],
        Yn = ["BARREL - .45 Tac Long", "BARREL - .45 Suppressor Light", "BARREL - .45 Compact"],
        xn = ["OPTIC - Classic Red Dot Sight", "OPTIC - Red Dot Sight 2", "OPTIC - Classic Holographic Sight", "OPTIC - Holographic Sight 2", "OPTIC - Red Dot Sight 3", "OPTIC - Holographic Sight 3", "OPTIC - Red Dot Sight 4", "OPTIC - Red Dot Sight 5", "OPTIC - Red Dot Sight 1", "OPTIC - Red Dot Sight 6", "OPTIC - Holographic Sight 1"],
        Jn = ["PERK - Full Ammo", "PERK - FMJ", "PERK - Wounding", "PERK - Disable", "PERK - Sleight of Hand"],
        vn = ["LASER - RTC Laser 1mW", "LASER - MIP Laser 5mW", "LASER - OWC Laser - Tactical"],
        wn = ["TRIGGER ACTION - Heavy Duty Trigger", "TRIGGER ACTION - Match Grade Trigger", "TRIGGER ACTION - Lightweight Trigger"],
        Qn = ["AMMUNITION - 15 Round Reload", "AMMUNITION - 20 Round Reload"],
        Vn = ["REAR GRIP - Stippled Grip Tape", "REAR GRIP - Granulated Grip Tape", "REAR GRIP - Rubberized Grip Tape"],
        jn = ["MUZZLE - OWC Light Suppressor", "MUZZLE - OWC Light Compensator", "MUZZLE - RTC Light Muzzle Brake", "MUZZLE - Tactical Suppressor", "MUZZLE - MIP Light Flash Guard", "MUZZLE - Monolithic Suppressor"],
        $n = ["BARREL - OWC Marksman", "BARREL - MIP Extended Light Barrel"],
        _n = ["OPTIC - Classic Red Dot Sight", "OPTIC - Red Dot Sight 2", "OPTIC - Classic Holographic Sight", "OPTIC - Holographic Sight 2", "OPTIC - Red Dot Sight 3", "OPTIC - Holographic Sight 3", "OPTIC - Red Dot Sight 4", "OPTIC - Red Dot Sight 5", "OPTIC - Red Dot Sight 1", "OPTIC - Red Dot Sight 6", "OPTIC - Holographic Sight 1"],
        rl = ["PERK - Full Ammo", "PERK - FMJ", "PERK - Wounding", "PERK - Disable", "PERK - Sleight of Hand", "PERK - Akimbo"],
        el = ["LASER - RTC Laser 1mW", "LASER - MIP Laser 5mW", "LASER - OWC Laser - Tactical"],
        tl = ["TRIGGER ACTION - Heavy Duty Trigger", "TRIGGER ACTION - Match Grade Trigger", "TRIGGER ACTION - Lightweight Trigger"],
        al = ["AMMUNITION - Extended Mag A", "AMMUNITION - Large Extended Mag B"],
        ol = ["REAR GRIP - Stippled Grip Tape", "REAR GRIP - Granulated Grip Tape", "REAR GRIP - Rubberized Grip Tape"],
        il = ["ASSAULT - M4", "ASSAULT - Type 25", "ASSAULT - M16", "ASSAULT - AK117", "ASSAULT - AK-47", "ASSAULT - ASM10", "ASSAULT - BK57", "ASSAULT - LK24", "ASSAULT - ICR-1", "ASSAULT - Man-O-War", "ASSAULT - KN-44", "ASSAULT - HBRa3", "ASSAULT - HVK-30", "ASSAULT - DR-H", "ASSAULT - Peacekeeper MK2", "ASSAULT - FR .556", "SNIPER - XPR-50", "SNIPER - Arctic .50", "SNIPER - M21 EBR", "SNIPER - DL Q33", "SNIPER - Locus", "SNIPER - Outlaw", "SNIPER - NA-45", "LMG - S36", "LMG - UL736", "LMG - RPD", "LMG - M4LMG", "LMG - Chopper", "SMG - RUS-79U", "SMG - Chicom", "SMG - PDW-57", "SMG - Razorback", "SMG - MSMC", "SMG - HG 40", "SMG - Pharo", "SMG - GKS", "SMG - Cordite", "SMG - QQ9", "SMG - Fennec", "SMG - AGR 556", "SMG - QXR", "SHOTGUN - HS2126", "SHOTGUN - BY15", "SHOTGUN - HSO405", "SHOTGUN - Striker", "SHOTGUN - KRM 262", "SHOTGUN - Echo", "MARKSMAN - Kilo Bolt-Action", "MARKSMAN - SKS"],
        nl = il[Math.floor(Math.random() * il.length)];

    document.querySelector("#primary").innerHTML = nl;

    var ll = ["PISTOL - J358", "PISTOL - MW11", "PISTOL - .50 GS", "MELEE - Knife", "MELEE - Base Melee", "MELEE - Axe", "MELEE - Karambit", "MELEE - Katana", "MELEE - Baseball Bat", "MELEE - Ice Pick", "MELEE - Glow Stick", "MELEE - Hachai", "MELEE - Folding Knife", "LAUNCHER - FHJ-18", "LAUNCHER - SMRS"],
        Ml = ll[Math.floor(Math.random() * ll.length)];
    document.querySelector("#secondary").innerHTML = Ml;
    var Rl = ["Trip Mine", "Frag Granade", "Sticky Grenade", "Combat Axe", "Molotov Cocktail", "Thermite", "Gas Grenade"],
        cl = Rl[Math.floor(Math.random() * Rl.length)];
    document.querySelector("#lethal").innerHTML = cl;
    var hl = ["Trophy System", "Flashbang Grenade", "Smoke Grenade", "Concussion Grenade", "EMP", "Cryo Bomb"],
        ml = hl[Math.floor(Math.random() * hl.length)];
    document.querySelector("#tactical").innerHTML = ml;
    var pl = ["Purifier", "War Machine", "Death Machine", "Transform Shield", "Sparrow", "Tempest", "H.I.V.E.", "Gravity Spikes", "Annihilator", "Shadow Blade", "Equalizer", "Ballistic Shield", "Gravity Vortex Gun"],
        Sl = pl[Math.floor(Math.random() * pl.length)];
    document.querySelector("#operatorSkill").innerHTML = Sl;
    var dl = ["Fast Recover", "Persistence", "Flak Jacket", "Skulker", "Agile", "Lightweight", "Restock", "Tactician"],
        Ll = dl[Math.floor(Math.random() * dl.length)];
    document.querySelector("#perk1").innerHTML = Ll;
    var ul = ["Vulture", "Toughness", "Tracker", "Ghost", "Cold-Blooded", "Hard Wired", "Quick Fix", "Amped"],
        Tl = ul[Math.floor(Math.random() * ul.length)];
    document.querySelector("#perk2").innerHTML = Tl;
    var El = ["Hardline", "Demo Expert", "Tactical Mask", "Alert", "Engineer", "Dead Silence", "Shrapnel", "High Alert", "Launcher Plus"],
        gl = El[Math.floor(Math.random() * El.length)];
    document.querySelector("#perk3").innerHTML = gl;
    var Pl = ["Trickster", "Scout", "Clown", "Medic", "Ninja", "Defender", "Mechanic", "Airborne", "Trap Master", "Poltergeist", "Smoke Bomber", "Refitter", "Desperado", "Hacker"],
        Al = Pl[Math.floor(Math.random() * Pl.length)];
    document.querySelector("#brclass").innerHTML = Al;

    var Ol = ["Muzzle", "Barrel", "Optic", "Stock", "Perk", "Laser", "Underbarrel", "Ammunition", "Rear Grip"],
        sl = ["Muzzle", "Barrel", "Optic", "Perk", "Laser", "Underbarrel", "Ammunition", "Rear Grip"],
        fl = ["Muzzle", "Barrel", "Optic", "Stock", "Perk", "Laser", "Underbarrel", "Ammunition"],
        Cl = ["Muzzle", "Barrel", "Optic", "Stock", "Perk", "Underbarrel", "Ammunition", "Rear Grip"],
        Il = ["Muzzle", "Barrel", "Optic", "Stock", "Perk", "Laser", "Underbarrel", "Ammunition"],
        yl = ["Muzzle", "Barrel", "Optic", "Stock", "Perk", "Laser", "Underbarrel", "Ammunition"],
        Ul = ["Muzzle", "Barrel", "Optic", "Stock", "Perk", "Laser", "Ammunition", "Rear Grip"],
        kl = ["Muzzle", "Barrel", "Optic", "Stock", "Perk", "Laser", "Underbarrel", "Rear Grip"],
        Bl = ["Muzzle", "Barrel", "Optic", "Stock", "Perk", "Laser", "Underbarrel", "Ammunition"];

    for (e = Ol[Math.floor(Math.random() * Ol.length)], t = Ol[Math.floor(Math.random() * Ol.length)]; e == t;) t = Ol[Math.floor(Math.random() * Ol.length)];
    for (a = Ol[Math.floor(Math.random() * Ol.length)]; a == e || a == t;) a = Ol[Math.floor(Math.random() * Ol.length)];
    for (o = Ol[Math.floor(Math.random() * Ol.length)]; o == e || o == t || o == a;) o = Ol[Math.floor(Math.random() * Ol.length)];
    for (i = Ol[Math.floor(Math.random() * Ol.length)]; i == e || i == t || i == a || i == o;) i = Ol[Math.floor(Math.random() * Ol.length)];

    if ("ASSAULT - M4" == nl) {
        if ("Muzzle" == e || "Muzzle" == t || "Muzzle" == a || "Muzzle" == o || "Muzzle" == i) {
            var Gl = h[Math.floor(Math.random() * h.length)];
            document.querySelector("#primary1").innerHTML = Gl
        }
        if ("Barrel" == e || "Barrel" == t || "Barrel" == a || "Barrel" == o || "Barrel" == i) {
            var Kl = m[Math.floor(Math.random() * m.length)];
            document.querySelector("#primary2").innerHTML = Kl
        }
        if ("Optic" == e || "Optic" == t || "Optic" == a || "Optic" == o || "Optic" == i) {
            var Hl = c[Math.floor(Math.random() * c.length)];
            document.querySelector("#primary3").innerHTML = Hl
        }
        if ("Stock" == e || "Stock" == t || "Stock" == a || "Stock" == o || "Stock" == i) {
            var zl = p[Math.floor(Math.random() * p.length)];
            document.querySelector("#primary4").innerHTML = zl
        }
        if ("Perk" == e || "Perk" == t || "Perk" == a || "Perk" == o || "Perk" == i) {
            var Zl = S[Math.floor(Math.random() * S.length)];
            document.querySelector("#primary5").innerHTML = Zl
        }
        if ("Laser" == e || "Laser" == t || "Laser" == a || "Laser" == o || "Laser" == i) {
            var Nl = d[Math.floor(Math.random() * d.length)];
            document.querySelector("#primary6").innerHTML = Nl
        }
        if ("Underbarrel" == e || "Underbarrel" == t || "Underbarrel" == a || "Underbarrel" == o || "Underbarrel" == i) {
            var bl = L[Math.floor(Math.random() * L.length)];
            document.querySelector("#primary7").innerHTML = bl
        }
        if ("Ammunition" == e || "Ammunition" == t || "Ammunition" == a || "Ammunition" == o || "Ammunition" == i) {
            var ql = u[Math.floor(Math.random() * u.length)];
            document.querySelector("#primary8").innerHTML = ql
        }
        if ("Rear Grip" == e || "Rear Grip" == t || "Rear Grip" == a || "Rear Grip" == o || "Rear Grip" == i) {
            var Dl = T[Math.floor(Math.random() * T.length)];
            document.querySelector("#primary9").innerHTML = Dl
        }
    } else if ("ASSAULT - Type 25" == nl) {
        if ("Muzzle" == e || "Muzzle" == t || "Muzzle" == a || "Muzzle" == o || "Muzzle" == i) {
            Gl = E[Math.floor(Math.random() * E.length)];
            document.querySelector("#primary1").innerHTML = Gl
        }
        if ("Barrel" == e || "Barrel" == t || "Barrel" == a || "Barrel" == o || "Barrel" == i) {
            Kl = g[Math.floor(Math.random() * g.length)];
            document.querySelector("#primary2").innerHTML = Kl
        }
        if ("Optic" == e || "Optic" == t || "Optic" == a || "Optic" == o || "Optic" == i) {
            Hl = c[Math.floor(Math.random() * c.length)];
            document.querySelector("#primary3").innerHTML = Hl
        }
        if ("Stock" == e || "Stock" == t || "Stock" == a || "Stock" == o || "Stock" == i) {
            zl = P[Math.floor(Math.random() * P.length)];
            document.querySelector("#primary4").innerHTML = zl
        }
        if ("Perk" == e || "Perk" == t || "Perk" == a || "Perk" == o || "Perk" == i) {
            Zl = A[Math.floor(Math.random() * A.length)];
            document.querySelector("#primary5").innerHTML = Zl
        }
        if ("Laser" == e || "Laser" == t || "Laser" == a || "Laser" == o || "Laser" == i) {
            Nl = O[Math.floor(Math.random() * O.length)];
            document.querySelector("#primary6").innerHTML = Nl
        }
        if ("Underbarrel" == e || "Underbarrel" == t || "Underbarrel" == a || "Underbarrel" == o || "Underbarrel" == i) {
            bl = s[Math.floor(Math.random() * s.length)];
            document.querySelector("#primary7").innerHTML = bl
        }
        if ("Ammunition" == e || "Ammunition" == t || "Ammunition" == a || "Ammunition" == o || "Ammunition" == i) {
            ql = f[Math.floor(Math.random() * f.length)];
            document.querySelector("#primary8").innerHTML = ql
        }
        if ("Rear Grip" == e || "Rear Grip" == t || "Rear Grip" == a || "Rear Grip" == o || "Rear Grip" == i) {
            Dl = C[Math.floor(Math.random() * C.length)];
            document.querySelector("#primary9").innerHTML = Dl
        }
    } else if ("ASSAULT - M16" == nl) {
        if ("Muzzle" == e || "Muzzle" == t || "Muzzle" == a || "Muzzle" == o || "Muzzle" == i) {
            Gl = I[Math.floor(Math.random() * I.length)];
            document.querySelector("#primary1").innerHTML = Gl
        }
        if ("Barrel" == e || "Barrel" == t || "Barrel" == a || "Barrel" == o || "Barrel" == i) {
            Kl = y[Math.floor(Math.random() * y.length)];
            document.querySelector("#primary2").innerHTML = Kl
        }
        if ("Optic" == e || "Optic" == t || "Optic" == a || "Optic" == o || "Optic" == i) {
            Hl = c[Math.floor(Math.random() * c.length)];
            document.querySelector("#primary3").innerHTML = Hl
        }
        if ("Stock" == e || "Stock" == t || "Stock" == a || "Stock" == o || "Stock" == i) {
            zl = U[Math.floor(Math.random() * U.length)];
            document.querySelector("#primary4").innerHTML = zl
        }
        if ("Perk" == e || "Perk" == t || "Perk" == a || "Perk" == o || "Perk" == i) {
            Zl = k[Math.floor(Math.random() * k.length)];
            document.querySelector("#primary5").innerHTML = Zl
        }
        if ("Laser" == e || "Laser" == t || "Laser" == a || "Laser" == o || "Laser" == i) {
            Nl = B[Math.floor(Math.random() * B.length)];
            document.querySelector("#primary6").innerHTML = Nl
        }
        if ("Underbarrel" == e || "Underbarrel" == t || "Underbarrel" == a || "Underbarrel" == o || "Underbarrel" == i) {
            bl = G[Math.floor(Math.random() * G.length)];
            document.querySelector("#primary7").innerHTML = bl
        }
        if ("Ammunition" == e || "Ammunition" == t || "Ammunition" == a || "Ammunition" == o || "Ammunition" == i) {
            ql = K[Math.floor(Math.random() * K.length)];
            document.querySelector("#primary8").innerHTML = ql
        }
        if ("Rear Grip" == e || "Rear Grip" == t || "Rear Grip" == a || "Rear Grip" == o || "Rear Grip" == i) {
            Dl = H[Math.floor(Math.random() * H.length)];
            document.querySelector("#primary9").innerHTML = Dl
        }
    } else if ("ASSAULT - AK117" == nl) {
        if ("Muzzle" == e || "Muzzle" == t || "Muzzle" == a || "Muzzle" == o || "Muzzle" == i) {
            Gl = z[Math.floor(Math.random() * z.length)];
            document.querySelector("#primary1").innerHTML = Gl
        }
        if ("Barrel" == e || "Barrel" == t || "Barrel" == a || "Barrel" == o || "Barrel" == i) {
            Kl = Z[Math.floor(Math.random() * Z.length)];
            document.querySelector("#primary2").innerHTML = Kl

        }
        if ("Optic" == e || "Optic" == t || "Optic" == a || "Optic" == o || "Optic" == i) {
            Hl = c[Math.floor(Math.random() * c.length)];
            document.querySelector("#primary3").innerHTML = Hl
        }
        if ("Stock" == e || "Stock" == t || "Stock" == a || "Stock" == o || "Stock" == i) {
            zl = N[Math.floor(Math.random() * N.length)];
            document.querySelector("#primary4").innerHTML = zl
        }
        if ("Perk" == e || "Perk" == t || "Perk" == a || "Perk" == o || "Perk" == i) {
            Zl = b[Math.floor(Math.random() * b.length)];
            document.querySelector("#primary5").innerHTML = Zl
        }
        if ("Laser" == e || "Laser" == t || "Laser" == a || "Laser" == o || "Laser" == i) {
            Nl = q[Math.floor(Math.random() * q.length)];
            document.querySelector("#primary6").innerHTML = Nl
        }
        if ("Underbarrel" == e || "Underbarrel" == t || "Underbarrel" == a || "Underbarrel" == o || "Underbarrel" == i) {
            bl = D[Math.floor(Math.random() * D.length)];
            document.querySelector("#primary7").innerHTML = bl
        }
        if ("Ammunition" == e || "Ammunition" == t || "Ammunition" == a || "Ammunition" == o || "Ammunition" == i) {
            ql = F[Math.floor(Math.random() * F.length)];
            document.querySelector("#primary8").innerHTML = ql
        }
        if ("Rear Grip" == e || "Rear Grip" == t || "Rear Grip" == a || "Rear Grip" == o || "Rear Grip" == i) {
            Dl = W[Math.floor(Math.random() * W.length)];
            document.querySelector("#primary9").innerHTML = Dl
        }
    } else if ("ASSAULT - AK-47" == nl) {
        if ("Muzzle" == e || "Muzzle" == t || "Muzzle" == a || "Muzzle" == o || "Muzzle" == i) {
            Gl = X[Math.floor(Math.random() * X.length)];
            document.querySelector("#primary1").innerHTML = Gl
        }
        if ("Barrel" == e || "Barrel" == t || "Barrel" == a || "Barrel" == o || "Barrel" == i) {
            Kl = Y[Math.floor(Math.random() * Y.length)];
            document.querySelector("#primary2").innerHTML = Kl
        }
        if ("Optic" == e || "Optic" == t || "Optic" == a || "Optic" == o || "Optic" == i) {
            Hl = c[Math.floor(Math.random() * c.length)];
            document.querySelector("#primary3").innerHTML = Hl
        }
        if ("Stock" == e || "Stock" == t || "Stock" == a || "Stock" == o || "Stock" == i) {
            zl = x[Math.floor(Math.random() * x.length)];
            document.querySelector("#primary4").innerHTML = zl
        }
        if ("Perk" == e || "Perk" == t || "Perk" == a || "Perk" == o || "Perk" == i) {
            Zl = J[Math.floor(Math.random() * J.length)];
            document.querySelector("#primary5").innerHTML = Zl
        }
        if ("Laser" == e || "Laser" == t || "Laser" == a || "Laser" == o || "Laser" == i) {
            Nl = v[Math.floor(Math.random() * v.length)];
            document.querySelector("#primary6").innerHTML = Nl
        }
        if ("Underbarrel" == e || "Underbarrel" == t || "Underbarrel" == a || "Underbarrel" == o || "Underbarrel" == i) {
            bl = w[Math.floor(Math.random() * w.length)];
            document.querySelector("#primary7").innerHTML = bl
        }
        if ("Ammunition" == e || "Ammunition" == t || "Ammunition" == a || "Ammunition" == o || "Ammunition" == i) {
            ql = Q[Math.floor(Math.random() * Q.length)];
            document.querySelector("#primary8").innerHTML = ql
        }
        if ("Rear Grip" == e || "Rear Grip" == t || "Rear Grip" == a || "Rear Grip" == o || "Rear Grip" == i) {
            Dl = V[Math.floor(Math.random() * V.length)];
            document.querySelector("#primary9").innerHTML = Dl
        }
    } else if ("ASSAULT - ASM10" == nl) {
        if ("Muzzle" == e || "Muzzle" == t || "Muzzle" == a || "Muzzle" == o || "Muzzle" == i) {
            Gl = j[Math.floor(Math.random() * j.length)];
            document.querySelector("#primary1").innerHTML = Gl
        }
        if ("Barrel" == e || "Barrel" == t || "Barrel" == a || "Barrel" == o || "Barrel" == i) {
            Kl = $[Math.floor(Math.random() * $.length)];
            document.querySelector("#primary2").innerHTML = Kl
        }
        if ("Optic" == e || "Optic" == t || "Optic" == a || "Optic" == o || "Optic" == i) {
            Hl = c[Math.floor(Math.random() * c.length)];
            document.querySelector("#primary3").innerHTML = Hl
        }
        if ("Stock" == e || "Stock" == t || "Stock" == a || "Stock" == o || "Stock" == i) {
            zl = _[Math.floor(Math.random() * _.length)];
            document.querySelector("#primary4").innerHTML = zl
        }
        if ("Perk" == e || "Perk" == t || "Perk" == a || "Perk" == o || "Perk" == i) {
            Zl = rr[Math.floor(Math.random() * rr.length)];
            document.querySelector("#primary5").innerHTML = Zl
        }
        if ("Laser" == e || "Laser" == t || "Laser" == a || "Laser" == o || "Laser" == i) {
            Nl = er[Math.floor(Math.random() * er.length)];
            document.querySelector("#primary6").innerHTML = Nl
        }
        if ("Underbarrel" == e || "Underbarrel" == t || "Underbarrel" == a || "Underbarrel" == o || "Underbarrel" == i) {

            bl = tr[Math.floor(Math.random() * tr.length)];
            document.querySelector("#primary7").innerHTML = bl
        }
        if ("Ammunition" == e || "Ammunition" == t || "Ammunition" == a || "Ammunition" == o || "Ammunition" == i) {
            ql = ar[Math.floor(Math.random() * ar.length)];
            document.querySelector("#primary8").innerHTML = ql
        }
        if ("Rear Grip" == e || "Rear Grip" == t || "Rear Grip" == a || "Rear Grip" == o || "Rear Grip" == i) {
            Dl = or[Math.floor(Math.random() * or.length)];
            document.querySelector("#primary9").innerHTML = Dl
        }
    } else if ("ASSAULT - BK57" == nl) {
        if ("Muzzle" == e || "Muzzle" == t || "Muzzle" == a || "Muzzle" == o || "Muzzle" == i) {
            Gl = ir[Math.floor(Math.random() * ir.length)];
            document.querySelector("#primary1").innerHTML = Gl
        }
        if ("Barrel" == e || "Barrel" == t || "Barrel" == a || "Barrel" == o || "Barrel" == i) {
            Kl = nr[Math.floor(Math.random() * nr.length)];
            document.querySelector("#primary2").innerHTML = Kl
        }
        if ("Optic" == e || "Optic" == t || "Optic" == a || "Optic" == o || "Optic" == i) {
            Hl = c[Math.floor(Math.random() * c.length)];
            document.querySelector("#primary3").innerHTML = Hl
        }
        if ("Stock" == e || "Stock" == t || "Stock" == a || "Stock" == o || "Stock" == i) {
            zl = lr[Math.floor(Math.random() * lr.length)];
            document.querySelector("#primary4").innerHTML = zl
        }
        if ("Perk" == e || "Perk" == t || "Perk" == a || "Perk" == o || "Perk" == i) {
            Zl = Mr[Math.floor(Math.random() * Mr.length)];
            document.querySelector("#primary5").innerHTML = Zl
        }
        if ("Laser" == e || "Laser" == t || "Laser" == a || "Laser" == o || "Laser" == i) {
            Nl = Rr[Math.floor(Math.random() * Rr.length)];
            document.querySelector("#primary6").innerHTML = Nl
        }
        if ("Underbarrel" == e || "Underbarrel" == t || "Underbarrel" == a || "Underbarrel" == o || "Underbarrel" == i) {
            bl = cr[Math.floor(Math.random() * cr.length)];
            document.querySelector("#primary7").innerHTML = bl
        }
        if ("Ammunition" == e || "Ammunition" == t || "Ammunition" == a || "Ammunition" == o || "Ammunition" == i) {
            ql = hr[Math.floor(Math.random() * hr.length)];
            document.querySelector("#primary8").innerHTML = ql
        }
        if ("Rear Grip" == e || "Rear Grip" == t || "Rear Grip" == a || "Rear Grip" == o || "Rear Grip" == i) {
            Dl = mr[Math.floor(Math.random() * mr.length)];
            document.querySelector("#primary9").innerHTML = Dl
        }
    } else if ("ASSAULT - LK24" == nl) {
        if ("Muzzle" == e || "Muzzle" == t || "Muzzle" == a || "Muzzle" == o || "Muzzle" == i) {
            Gl = pr[Math.floor(Math.random() * pr.length)];
            document.querySelector("#primary1").innerHTML = Gl
        }
        if ("Barrel" == e || "Barrel" == t || "Barrel" == a || "Barrel" == o || "Barrel" == i) {
            Kl = Sr[Math.floor(Math.random() * Sr.length)];
            document.querySelector("#primary2").innerHTML = Kl
        }
        if ("Optic" == e || "Optic" == t || "Optic" == a || "Optic" == o || "Optic" == i) {
            Hl = c[Math.floor(Math.random() * c.length)];
            document.querySelector("#primary3").innerHTML = Hl
        }
        if ("Stock" == e || "Stock" == t || "Stock" == a || "Stock" == o || "Stock" == i) {
            zl = dr[Math.floor(Math.random() * dr.length)];
            document.querySelector("#primary4").innerHTML = zl
        }
        if ("Perk" == e || "Perk" == t || "Perk" == a || "Perk" == o || "Perk" == i) {
            Zl = Lr[Math.floor(Math.random() * Lr.length)];
            document.querySelector("#primary5").innerHTML = Zl
        }
        if ("Laser" == e || "Laser" == t || "Laser" == a || "Laser" == o || "Laser" == i) {
            Nl = ur[Math.floor(Math.random() * ur.length)];
            document.querySelector("#primary6").innerHTML = Nl
        }
        if ("Underbarrel" == e || "Underbarrel" == t || "Underbarrel" == a || "Underbarrel" == o || "Underbarrel" == i) {
            bl = Tr[Math.floor(Math.random() * Tr.length)];
            document.querySelector("#primary7").innerHTML = bl
        }
        if ("Ammunition" == e || "Ammunition" == t || "Ammunition" == a || "Ammunition" == o || "Ammunition" == i) {
            ql = Er[Math.floor(Math.random() * Er.length)];
            document.querySelector("#primary8").innerHTML = ql
        }
        if ("Rear Grip" == e || "Rear Grip" == t || "Rear Grip" == a || "Rear Grip" == o || "Rear Grip" == i) {
            Dl = gr[Math.floor(Math.random() * gr.length)];
            document.querySelector("#primary9").innerHTML = Dl
        }
    } else if ("ASSAULT - ICR-1" == nl) {
        if ("Muzzle" == e || "Muzzle" == t || "Muzzle" == a || "Muzzle" == o || "Muzzle" == i) {
            Gl = Pr[Math.floor(Math.random() * Pr.length)];
            document.querySelector("#primary1").innerHTML = Gl
        }
        if ("Barrel" == e || "Barrel" == t || "Barrel" == a || "Barrel" == o || "Barrel" == i) {
            Kl = Ar[Math.floor(Math.random() * Ar.length)];
            document.querySelector("#primary2").innerHTML = Kl
        }
        if ("Optic" == e || "Optic" == t || "Optic" == a || "Optic" == o || "Optic" == i) {
            Hl = c[Math.floor(Math.random() * c.length)];
            document.querySelector("#primary3").innerHTML = Hl
        }
        if ("Stock" == e || "Stock" == t || "Stock" == a || "Stock" == o || "Stock" == i) {
            zl = Or[Math.floor(Math.random() * Or.length)];
            document.querySelector("#primary4").innerHTML = zl
        }
        if ("Perk" == e || "Perk" == t || "Perk" == a || "Perk" == o || "Perk" == i) {
            Zl = sr[Math.floor(Math.random() * sr.length)];
            document.querySelector("#primary5").innerHTML = Zl
        }
        if ("Laser" == e || "Laser" == t || "Laser" == a || "Laser" == o || "Laser" == i) {
            Nl = fr[Math.floor(Math.random() * fr.length)];
            document.querySelector("#primary6").innerHTML = Nl
        }
        if ("Underbarrel" == e || "Underbarrel" == t || "Underbarrel" == a || "Underbarrel" == o || "Underbarrel" == i) {
            bl = Cr[Math.floor(Math.random() * Cr.length)];
            document.querySelector("#primary7").innerHTML = bl
        }
        if ("Ammunition" == e || "Ammunition" == t || "Ammunition" == a || "Ammunition" == o || "Ammunition" == i) {
            ql = Ir[Math.floor(Math.random() * Ir.length)];
            document.querySelector("#primary8").innerHTML = ql
        }
        if ("Rear Grip" == e || "Rear Grip" == t || "Rear Grip" == a || "Rear Grip" == o || "Rear Grip" == i) {
            Dl = yr[Math.floor(Math.random() * yr.length)];
            document.querySelector("#primary9").innerHTML = Dl
        }
    } else if ("ASSAULT - Man-O-War" == nl) {
        if ("Muzzle" == e || "Muzzle" == t || "Muzzle" == a || "Muzzle" == o || "Muzzle" == i) {
            Gl = Ur[Math.floor(Math.random() * Ur.length)];
            document.querySelector("#primary1").innerHTML = Gl
        }
        if ("Barrel" == e || "Barrel" == t || "Barrel" == a || "Barrel" == o || "Barrel" == i) {
            Kl = kr[Math.floor(Math.random() * kr.length)];
            document.querySelector("#primary2").innerHTML = Kl
        }
        if ("Optic" == e || "Optic" == t || "Optic" == a || "Optic" == o || "Optic" == i) {
            Hl = c[Math.floor(Math.random() * c.length)];
            document.querySelector("#primary3").innerHTML = Hl
        }
        if ("Stock" == e || "Stock" == t || "Stock" == a || "Stock" == o || "Stock" == i) {
            zl = Br[Math.floor(Math.random() * Br.length)];
            document.querySelector("#primary4").innerHTML = zl
        }
        if ("Perk" == e || "Perk" == t || "Perk" == a || "Perk" == o || "Perk" == i) {
            Zl = Gr[Math.floor(Math.random() * Gr.length)];
            document.querySelector("#primary5").innerHTML = Zl
        }



        if ("Laser" == e || "Laser" == t || "Laser" == a || "Laser" == o || "Laser" == i) {
            Nl = Kr[Math.floor(Math.random() * Kr.length)];
            document.querySelector("#primary6").innerHTML = Nl
        }
        if ("Underbarrel" == e || "Underbarrel" == t || "Underbarrel" == a || "Underbarrel" == o || "Underbarrel" == i) {
            bl = Hr[Math.floor(Math.random() * Hr.length)];
            document.querySelector("#primary7").innerHTML = bl
        }
        if ("Ammunition" == e || "Ammunition" == t || "Ammunition" == a || "Ammunition" == o || "Ammunition" == i) {
            ql = zr[Math.floor(Math.random() * zr.length)];
            document.querySelector("#primary8").innerHTML = ql
        }
        if ("Rear Grip" == e || "Rear Grip" == t || "Rear Grip" == a || "Rear Grip" == o || "Rear Grip" == i) {
            Dl = Zr[Math.floor(Math.random() * Zr.length)];
            document.querySelector("#primary9").innerHTML = Dl
        }
    } else if ("ASSAULT - KN-44" == nl) {
        if ("Muzzle" == e || "Muzzle" == t || "Muzzle" == a || "Muzzle" == o || "Muzzle" == i) {
            Gl = Nr[Math.floor(Math.random() * Nr.length)];
            document.querySelector("#primary1").innerHTML = Gl
        }
        if ("Barrel" == e || "Barrel" == t || "Barrel" == a || "Barrel" == o || "Barrel" == i) {
            Kl = br[Math.floor(Math.random() * br.length)];
            document.querySelector("#primary2").innerHTML = Kl
        }
        if ("Optic" == e || "Optic" == t || "Optic" == a || "Optic" == o || "Optic" == i) {
            Hl = c[Math.floor(Math.random() * c.length)];
            document.querySelector("#primary3").innerHTML = Hl
        }
        if ("Stock" == e || "Stock" == t || "Stock" == a || "Stock" == o || "Stock" == i) {
            zl = qr[Math.floor(Math.random() * qr.length)];
            document.querySelector("#primary4").innerHTML = zl
        }
        if ("Perk" == e || "Perk" == t || "Perk" == a || "Perk" == o || "Perk" == i) {
            Zl = Dr[Math.floor(Math.random() * Dr.length)];
            document.querySelector("#primary5").innerHTML = Zl
        }
        if ("Laser" == e || "Laser" == t || "Laser" == a || "Laser" == o || "Laser" == i) {
            Nl = Fr[Math.floor(Math.random() * Fr.length)];
            document.querySelector("#primary6").innerHTML = Nl
        }
        if ("Underbarrel" == e || "Underbarrel" == t || "Underbarrel" == a || "Underbarrel" == o || "Underbarrel" == i) {
            bl = Wr[Math.floor(Math.random() * Wr.length)];
            document.querySelector("#primary7").innerHTML = bl
        }
        if ("Ammunition" == e || "Ammunition" == t || "Ammunition" == a || "Ammunition" == o || "Ammunition" == i) {
            ql = Xr[Math.floor(Math.random() * Xr.length)];
            document.querySelector("#primary8").innerHTML = ql
        }
        if ("Rear Grip" == e || "Rear Grip" == t || "Rear Grip" == a || "Rear Grip" == o || "Rear Grip" == i) {
            Dl = Yr[Math.floor(Math.random() * Yr.length)];
            document.querySelector("#primary9").innerHTML = Dl
        }
    } else if ("ASSAULT - HBRa3" == nl) {
        if ("Muzzle" == e || "Muzzle" == t || "Muzzle" == a || "Muzzle" == o || "Muzzle" == i) {
            Gl = xr[Math.floor(Math.random() * xr.length)];
            document.querySelector("#primary1").innerHTML = Gl
        }
        if ("Barrel" == e || "Barrel" == t || "Barrel" == a || "Barrel" == o || "Barrel" == i) {
            Kl = Jr[Math.floor(Math.random() * Jr.length)];
            document.querySelector("#primary2").innerHTML = Kl
        }
        if ("Optic" == e || "Optic" == t || "Optic" == a || "Optic" == o || "Optic" == i) {
            Hl = c[Math.floor(Math.random() * c.length)];
            document.querySelector("#primary3").innerHTML = Hl
        }
        if ("Stock" == e || "Stock" == t || "Stock" == a || "Stock" == o || "Stock" == i) {
            zl = vr[Math.floor(Math.random() * vr.length)];
            document.querySelector("#primary4").innerHTML = zl
        }
        if ("Perk" == e || "Perk" == t || "Perk" == a || "Perk" == o || "Perk" == i) {
            Zl = wr[Math.floor(Math.random() * wr.length)];
            document.querySelector("#primary5").innerHTML = Zl
        }
        if ("Laser" == e || "Laser" == t || "Laser" == a || "Laser" == o || "Laser" == i) {
            Nl = Qr[Math.floor(Math.random() * Qr.length)];
            document.querySelector("#primary6").innerHTML = Nl
        }
        if ("Underbarrel" == e || "Underbarrel" == t || "Underbarrel" == a || "Underbarrel" == o || "Underbarrel" == i) {
            bl = Vr[Math.floor(Math.random() * Vr.length)];
            document.querySelector("#primary7").innerHTML = bl
        }
        if ("Ammunition" == e || "Ammunition" == t || "Ammunition" == a || "Ammunition" == o || "Ammunition" == i) {
            ql = jr[Math.floor(Math.random() * jr.length)];
            document.querySelector("#primary8").innerHTML = ql
        }
        if ("Rear Grip" == e || "Rear Grip" == t || "Rear Grip" == a || "Rear Grip" == o || "Rear Grip" == i) {
            Dl = $r[Math.floor(Math.random() * $r.length)];
            document.querySelector("#primary9").innerHTML = Dl
        }
    } else if ("ASSAULT - HVK-30" == nl) {
        if ("Muzzle" == e || "Muzzle" == t || "Muzzle" == a || "Muzzle" == o || "Muzzle" == i) {
            Gl = _r[Math.floor(Math.random() * _r.length)];
            document.querySelector("#primary1").innerHTML = Gl
        }
        if ("Barrel" == e || "Barrel" == t || "Barrel" == a || "Barrel" == o || "Barrel" == i) {
            Kl = re[Math.floor(Math.random() * re.length)];
            document.querySelector("#primary2").innerHTML = Kl
        }
        if ("Optic" == e || "Optic" == t || "Optic" == a || "Optic" == o || "Optic" == i) {
            Hl = c[Math.floor(Math.random() * c.length)];
            document.querySelector("#primary3").innerHTML = Hl
        }
        if ("Stock" == e || "Stock" == t || "Stock" == a || "Stock" == o || "Stock" == i) {
            zl = ee[Math.floor(Math.random() * ee.length)];
            document.querySelector("#primary4").innerHTML = zl
        }
        if ("Perk" == e || "Perk" == t || "Perk" == a || "Perk" == o || "Perk" == i) {
            Zl = te[Math.floor(Math.random() * te.length)];
            document.querySelector("#primary5").innerHTML = Zl
        }
        if ("Laser" == e || "Laser" == t || "Laser" == a || "Laser" == o || "Laser" == i) {
            Nl = ae[Math.floor(Math.random() * ae.length)];
            document.querySelector("#primary6").innerHTML = Nl
        }
        if ("Underbarrel" == e || "Underbarrel" == t || "Underbarrel" == a || "Underbarrel" == o || "Underbarrel" == i) {
            bl = oe[Math.floor(Math.random() * oe.length)];
            document.querySelector("#primary7").innerHTML = bl
        }
        if ("Ammunition" == e || "Ammunition" == t || "Ammunition" == a || "Ammunition" == o || "Ammunition" == i) {
            ql = ie[Math.floor(Math.random() * ie.length)];
            document.querySelector("#primary8").innerHTML = ql
        }
        if ("Rear Grip" == e || "Rear Grip" == t || "Rear Grip" == a || "Rear Grip" == o || "Rear Grip" == i) {
            Dl = ne[Math.floor(Math.random() * ne.length)];
            document.querySelector("#primary9").innerHTML = Dl
        }
    } else if ("ASSAULT - DR-H" == nl) {
        if ("Muzzle" == e || "Muzzle" == t || "Muzzle" == a || "Muzzle" == o || "Muzzle" == i) {
            Gl = le[Math.floor(Math.random() * le.length)];
            document.querySelector("#primary1").innerHTML = Gl
        }
        if ("Barrel" == e || "Barrel" == t || "Barrel" == a || "Barrel" == o || "Barrel" == i) {
            Kl = Me[Math.floor(Math.random() * Me.length)];
            document.querySelector("#primary2").innerHTML = Kl
        }
        if ("Optic" == e || "Optic" == t || "Optic" == a || "Optic" == o || "Optic" == i) {
            Hl = c[Math.floor(Math.random() * c.length)];
            document.querySelector("#primary3").innerHTML = Hl
        }
        if ("Stock" == e || "Stock" == t || "Stock" == a || "Stock" == o || "Stock" == i) {
            zl = Re[Math.floor(Math.random() * Re.length)];
            document.querySelector("#primary4").innerHTML = zl
        }
        if ("Perk" == e || "Perk" == t || "Perk" == a || "Perk" == o || "Perk" == i) {
            Zl = ce[Math.floor(Math.random() * ce.length)];
            document.querySelector("#primary5").innerHTML = Zl
        }
        if ("Laser" == e || "Laser" == t || "Laser" == a || "Laser" == o || "Laser" == i) {
            Nl = he[Math.floor(Math.random() * he.length)];
            document.querySelector("#primary6").innerHTML = Nl
        }
        if ("Underbarrel" == e || "Underbarrel" == t || "Underbarrel" == a || "Underbarrel" == o || "Underbarrel" == i) {
            bl = me[Math.floor(Math.random() * me.length)];
            document.querySelector("#primary7").innerHTML = bl
        }
        if ("Ammunition" == e || "Ammunition" == t || "Ammunition" == a || "Ammunition" == o || "Ammunition" == i) {
            ql = pe[Math.floor(Math.random() * pe.length)];
            document.querySelector("#primary8").innerHTML = ql
        }
        if ("Rear Grip" == e || "Rear Grip" == t || "Rear Grip" == a || "Rear Grip" == o || "Rear Grip" == i) {
            Dl = Se[Math.floor(Math.random() * Se.length)];
            document.querySelector("#primary9").innerHTML = Dl
        }
    } else if ("ASSAULT - Peacekeeper MK2" == nl) {
        if ("Muzzle" == e || "Muzzle" == t || "Muzzle" == a || "Muzzle" == o || "Muzzle" == i) {
            Gl = de[Math.floor(Math.random() * de.length)];
            document.querySelector("#primary1").innerHTML = Gl
        }
        if ("Barrel" == e || "Barrel" == t || "Barrel" == a || "Barrel" == o || "Barrel" == i) {
            Kl = Le[Math.floor(Math.random() * Le.length)];
            document.querySelector("#primary2").innerHTML = Kl
        }
        if ("Optic" == e || "Optic" == t || "Optic" == a || "Optic" == o || "Optic" == i) {
            Hl = c[Math.floor(Math.random() * c.length)];
            document.querySelector("#primary3").innerHTML = Hl
        }
        if ("Stock" == e || "Stock" == t || "Stock" == a || "Stock" == o || "Stock" == i) {
            zl = ue[Math.floor(Math.random() * ue.length)];
            document.querySelector("#primary4").innerHTML = zl
        }
        if ("Perk" == e || "Perk" == t || "Perk" == a || "Perk" == o || "Perk" == i) {
            Zl = Te[Math.floor(Math.random() * Te.length)];
            document.querySelector("#primary5").innerHTML = Zl
        }
        if ("Laser" == e || "Laser" == t || "Laser" == a || "Laser" == o || "Laser" == i) {
            Nl = Ee[Math.floor(Math.random() * Ee.length)];
            document.querySelector("#primary6").innerHTML = Nl
        }
        if ("Underbarrel" == e || "Underbarrel" == t || "Underbarrel" == a || "Underbarrel" == o || "Underbarrel" == i) {
            bl = ge[Math.floor(Math.random() * ge.length)];
            document.querySelector("#primary7").innerHTML = bl
        }
        if ("Ammunition" == e || "Ammunition" == t || "Ammunition" == a || "Ammunition" == o || "Ammunition" == i) {
            ql = Pe[Math.floor(Math.random() * Pe.length)];
            document.querySelector("#primary8").innerHTML = ql
        }
        if ("Rear Grip" == e || "Rear Grip" == t || "Rear Grip" == a || "Rear Grip" == o || "Rear Grip" == i) {
            Dl = Ae[Math.floor(Math.random() * Ae.length)];
            document.querySelector("#primary9").innerHTML = Dl
        }
    } else if ("ASSAULT - FR .556" == nl) {
        if ("Muzzle" == e || "Muzzle" == t || "Muzzle" == a || "Muzzle" == o || "Muzzle" == i) {
            Gl = Oe[Math.floor(Math.random() * Oe.length)];
            document.querySelector("#primary1").innerHTML = Gl
        }
        if ("Barrel" == e || "Barrel" == t || "Barrel" == a || "Barrel" == o || "Barrel" == i) {
            Kl = se[Math.floor(Math.random() * se.length)];
            document.querySelector("#primary2").innerHTML = Kl
        }
        if ("Optic" == e || "Optic" == t || "Optic" == a || "Optic" == o || "Optic" == i) {
            Hl = c[Math.floor(Math.random() * c.length)];
            document.querySelector("#primary3").innerHTML = Hl
        }
        if ("Stock" == e || "Stock" == t || "Stock" == a || "Stock" == o || "Stock" == i) {
            zl = fe[Math.floor(Math.random() * fe.length)];
            document.querySelector("#primary4").innerHTML = zl
        }
        if ("Perk" == e || "Perk" == t || "Perk" == a || "Perk" == o || "Perk" == i) {
            Zl = Ce[Math.floor(Math.random() * Ce.length)];
            document.querySelector("#primary5").innerHTML = Zl
        }
        if ("Laser" == e || "Laser" == t || "Laser" == a || "Laser" == o || "Laser" == i) {
            Nl = Ie[Math.floor(Math.random() * Ie.length)];
            document.querySelector("#primary6").innerHTML = Nl
        }
        if ("Underbarrel" == e || "Underbarrel" == t || "Underbarrel" == a || "Underbarrel" == o || "Underbarrel" == i) {
            bl = ye[Math.floor(Math.random() * ye.length)];
            document.querySelector("#primary7").innerHTML = bl
        }
        if ("Ammunition" == e || "Ammunition" == t || "Ammunition" == a || "Ammunition" == o || "Ammunition" == i) {
            ql = Ue[Math.floor(Math.random() * Ue.length)];
            document.querySelector("#primary8").innerHTML = ql
        }
        if ("Rear Grip" == e || "Rear Grip" == t || "Rear Grip" == a || "Rear Grip" == o || "Rear Grip" == i) {
            Dl = ke[Math.floor(Math.random() * ke.length)];
            document.querySelector("#primary9").innerHTML = Dl
        }
    } else if ("SNIPER - XPR-50" == nl) {
        for (e = fl[Math.floor(Math.random() * fl.length)], t = fl[Math.floor(Math.random() * fl.length)]; e == t;) t = fl[Math.floor(Math.random() * fl.length)];
        for (a = fl[Math.floor(Math.random() * fl.length)]; a == e || a == t;) a = fl[Math.floor(Math.random() * fl.length)];
        for (o = fl[Math.floor(Math.random() * fl.length)]; o == e || o == t || o == a;) o = fl[Math.floor(Math.random() * fl.length)];
        for (i = fl[Math.floor(Math.random() * fl.length)]; i == e || i == t || i == a || i == o;) i = fl[Math.floor(Math.random() * fl.length)];

        if ("Muzzle" == e || "Muzzle" == t || "Muzzle" == a || "Muzzle" == o || "Muzzle" == i) {
            Gl = Be[Math.floor(Math.random() * Be.length)];
            document.querySelector("#primary1").innerHTML = Gl
        }
        if ("Barrel" == e || "Barrel" == t || "Barrel" == a || "Barrel" == o || "Barrel" == i) {
            Kl = Ge[Math.floor(Math.random() * Ge.length)];
            document.querySelector("#primary2").innerHTML = Kl
        }
        if ("Optic" == e || "Optic" == t || "Optic" == a || "Optic" == o || "Optic" == i) {
            Hl = Ke[Math.floor(Math.random() * Ke.length)];
            document.querySelector("#primary3").innerHTML = Hl
        }
        if ("Stock" == e || "Stock" == t || "Stock" == a || "Stock" == o || "Stock" == i) {
            zl = He[Math.floor(Math.random() * He.length)];
            document.querySelector("#primary4").innerHTML = zl
        }
        if ("Perk" == e || "Perk" == t || "Perk" == a || "Perk" == o || "Perk" == i) {
            Zl = ze[Math.floor(Math.random() * ze.length)];
            document.querySelector("#primary5").innerHTML = Zl
        }
        if ("Laser" == e || "Laser" == t || "Laser" == a || "Laser" == o || "Laser" == i) {
            Nl = "LASER - OWC Laser - Tactical";
            document.querySelector("#primary6").innerHTML = Nl
        }
        if ("Underbarrel" == e || "Underbarrel" == t || "Underbarrel" == a || "Underbarrel" == o || "Underbarrel" == i) {
            bl = Ze[Math.floor(Math.random() * Ze.length)];
            document.querySelector("#primary7").innerHTML = bl
        }
        if ("Ammunition" == e || "Ammunition" == t || "Ammunition" == a || "Ammunition" == o || "Ammunition" == i) {
            ql = Ne[Math.floor(Math.random() * Ne.length)];
            document.querySelector("#primary8").innerHTML = ql
        }
        if ("Rear Grip" == e || "Rear Grip" == t || "Rear Grip" == a || "Rear Grip" == o || "Rear Grip" == i) {
            Dl = xpr50RearGrip[Math.floor(Math.random() * xpr50RearGrip.length)];
            document.querySelector("#primary9").innerHTML = Dl
        }
    } else if ("SNIPER - Arctic .50" == nl) {

        for (e = Cl[Math.floor(Math.random() * Cl.length)], t = Cl[Math.floor(Math.random() * Cl.length)]; e == t;) t = Cl[Math.floor(Math.random() * Cl.length)];
        for (a = Cl[Math.floor(Math.random() * Cl.length)]; a == e || a == t;) a = Cl[Math.floor(Math.random() * Cl.length)];
        for (o = Cl[Math.floor(Math.random() * Cl.length)]; o == e || o == t || o == a;) o = Cl[Math.floor(Math.random() * Cl.length)];
        for (i = Cl[Math.floor(Math.random() * Cl.length)]; i == e || i == t || i == a || i == o;) i = Cl[Math.floor(Math.random() * Cl.length)];

        if ("Muzzle" == e || "Muzzle" == t || "Muzzle" == a || "Muzzle" == o || "Muzzle" == i) {
            Gl = be[Math.floor(Math.random() * be.length)];
            document.querySelector("#primary1").innerHTML = Gl
        }
        if ("Barrel" == e || "Barrel" == t || "Barrel" == a || "Barrel" == o || "Barrel" == i) {
            Kl = qe[Math.floor(Math.random() * qe.length)];
            document.querySelector("#primary2").innerHTML = Kl
        }
        if ("Optic" == e || "Optic" == t || "Optic" == a || "Optic" == o || "Optic" == i) {
            Hl = De[Math.floor(Math.random() * De.length)];
            document.querySelector("#primary3").innerHTML = Hl
        }
        if ("Stock" == e || "Stock" == t || "Stock" == a || "Stock" == o || "Stock" == i) {
            zl = Fe[Math.floor(Math.random() * Fe.length)];
            document.querySelector("#primary4").innerHTML = zl
        }
        if ("Perk" == e || "Perk" == t || "Perk" == a || "Perk" == o || "Perk" == i) {
            Zl = We[Math.floor(Math.random() * We.length)];
            document.querySelector("#primary5").innerHTML = Zl
        }
        if ("Laser" == e || "Laser" == t || "Laser" == a || "Laser" == o || "Laser" == i) {
            Nl = arctic50Laser[Math.floor(Math.random() * arctic50Laser.length)];
            document.querySelector("#primary6").innerHTML = Nl
        }
        if ("Underbarrel" == e || "Underbarrel" == t || "Underbarrel" == a || "Underbarrel" == o || "Underbarrel" == i) {
            bl = "UNDERBARREL - Bipod";
            document.querySelector("#primary7").innerHTML = bl
        }
        if ("Ammunition" == e || "Ammunition" == t || "Ammunition" == a || "Ammunition" == o || "Ammunition" == i) {
            ql = Xe[Math.floor(Math.random() * Xe.length)];
            document.querySelector("#primary8").innerHTML = ql
        }
        if ("Rear Grip" == e || "Rear Grip" == t || "Rear Grip" == a || "Rear Grip" == o || "Rear Grip" == i) {
            Dl = Ye[Math.floor(Math.random() * Ye.length)];
            document.querySelector("#primary9").innerHTML = Dl
        }
    } else if ("SNIPER - M21 EBR" == nl) {
        for (e = Il[Math.floor(Math.random() * Il.length)], t = Il[Math.floor(Math.random() * Il.length)]; e == t;) t = Il[Math.floor(Math.random() * Il.length)];
        for (a = Il[Math.floor(Math.random() * Il.length)]; a == e || a == t;) a = Il[Math.floor(Math.random() * Il.length)];
        for (o = Il[Math.floor(Math.random() * Il.length)]; o == e || o == t || o == a;) o = Il[Math.floor(Math.random() * Il.length)];
        for (i = Il[Math.floor(Math.random() * Il.length)]; i == e || i == t || i == a || i == o;) i = Il[Math.floor(Math.random() * Il.length)];

        if ("Muzzle" == e || "Muzzle" == t || "Muzzle" == a || "Muzzle" == o || "Muzzle" == i) {
            Gl = xe[Math.floor(Math.random() * xe.length)];
            document.querySelector("#primary1").innerHTML = Gl
        }
        if ("Barrel" == e || "Barrel" == t || "Barrel" == a || "Barrel" == o || "Barrel" == i) {
            Kl = Je[Math.floor(Math.random() * Je.length)];
            document.querySelector("#primary2").innerHTML = Kl
        }
        if ("Optic" == e || "Optic" == t || "Optic" == a || "Optic" == o || "Optic" == i) {
            Hl = ve[Math.floor(Math.random() * ve.length)];
            document.querySelector("#primary3").innerHTML = Hl
        }
        if ("Stock" == e || "Stock" == t || "Stock" == a || "Stock" == o || "Stock" == i) {
            zl = we[Math.floor(Math.random() * we.length)];
            document.querySelector("#primary4").innerHTML = zl
        }
        if ("Perk" == e || "Perk" == t || "Perk" == a || "Perk" == o || "Perk" == i) {
            Zl = Qe[Math.floor(Math.random() * Qe.length)];
            document.querySelector("#primary5").innerHTML = Zl
        }
        if ("Laser" == e || "Laser" == t || "Laser" == a || "Laser" == o || "Laser" == i) {
            Nl = "LASER - OWC Laser - Tactical";
            document.querySelector("#primary6").innerHTML = Nl
        }
        if ("Underbarrel" == e || "Underbarrel" == t || "Underbarrel" == a || "Underbarrel" == o || "Underbarrel" == i) {
            bl = Ve[Math.floor(Math.random() * Ve.length)];
            document.querySelector("#primary7").innerHTML = bl
        }
        if ("Ammunition" == e || "Ammunition" == t || "Ammunition" == a || "Ammunition" == o || "Ammunition" == i) {
            ql = je[Math.floor(Math.random() * je.length)];
            document.querySelector("#primary8").innerHTML = ql
        }
        if ("Rear Grip" == e || "Rear Grip" == t || "Rear Grip" == a || "Rear Grip" == o || "Rear Grip" == i) {
            Dl = m21ebrRearGrip[Math.floor(Math.random() * m21ebrRearGrip.length)];
            document.querySelector("#primary9").innerHTML = Dl
        }
    } else if ("SNIPER - DL Q33" == nl) {

        for (e = yl[Math.floor(Math.random() * yl.length)], t = yl[Math.floor(Math.random() * yl.length)]; e == t;) t = yl[Math.floor(Math.random() * yl.length)];
        for (a = yl[Math.floor(Math.random() * yl.length)]; a == e || a == t;) a = yl[Math.floor(Math.random() * yl.length)];
        for (o = yl[Math.floor(Math.random() * yl.length)]; o == e || o == t || o == a;) o = yl[Math.floor(Math.random() * yl.length)];
        for (i = yl[Math.floor(Math.random() * yl.length)]; i == e || i == t || i == a || i == o;) i = yl[Math.floor(Math.random() * yl.length)];

        if ("Muzzle" == e || "Muzzle" == t || "Muzzle" == a || "Muzzle" == o || "Muzzle" == i) {

            Gl = $e[Math.floor(Math.random() * $e.length)];
            document.querySelector("#primary1").innerHTML = Gl
        }
        if ("Barrel" == e || "Barrel" == t || "Barrel" == a || "Barrel" == o || "Barrel" == i) {

            Kl = _e[Math.floor(Math.random() * _e.length)];
            document.querySelector("#primary2").innerHTML = Kl
        }
        if ("Optic" == e || "Optic" == t || "Optic" == a || "Optic" == o || "Optic" == i) {

            Hl = rt[Math.floor(Math.random() * rt.length)];
            document.querySelector("#primary3").innerHTML = Hl
        }
        if ("Stock" == e || "Stock" == t || "Stock" == a || "Stock" == o || "Stock" == i) {

            zl = et[Math.floor(Math.random() * et.length)];
            document.querySelector("#primary4").innerHTML = zl
        }
        if ("Perk" == e || "Perk" == t || "Perk" == a || "Perk" == o || "Perk" == i) {

            Zl = tt[Math.floor(Math.random() * tt.length)];
            document.querySelector("#primary5").innerHTML = Zl
        }
        if ("Laser" == e || "Laser" == t || "Laser" == a || "Laser" == o || "Laser" == i) {

            Nl = "LASER - OWC Laser - Tactical";
            document.querySelector("#primary6").innerHTML = Nl
        }
        if ("Underbarrel" == e || "Underbarrel" == t || "Underbarrel" == a || "Underbarrel" == o || "Underbarrel" == i) {

            bl = "UNDERBARREL - Bipod";
            document.querySelector("#primary7").innerHTML = bl
        }
        if ("Ammunition" == e || "Ammunition" == t || "Ammunition" == a || "Ammunition" == o || "Ammunition" == i) {

            ql = at[Math.floor(Math.random() * at.length)];
            document.querySelector("#primary8").innerHTML = ql
        }
        if ("Rear Grip" == e || "Rear Grip" == t || "Rear Grip" == a || "Rear Grip" == o || "Rear Grip" == i) {

            Dl = dlq33RearGrip[Math.floor(Math.random() * dlq33RearGrip.length)];
            document.querySelector("#primary9").innerHTML = Dl
        }
    } else if ("SNIPER - Locus" == nl) {

        for (e = Ul[Math.floor(Math.random() * Ul.length)], t = Ul[Math.floor(Math.random() * Ul.length)]; e == t;) t = Ul[Math.floor(Math.random() * Ul.length)];
        for (a = Ul[Math.floor(Math.random() * Ul.length)]; a == e || a == t;) a = Ul[Math.floor(Math.random() * Ul.length)];
        for (o = Ul[Math.floor(Math.random() * Ul.length)]; o == e || o == t || o == a;) o = Ul[Math.floor(Math.random() * Ul.length)];
        for (i = Ul[Math.floor(Math.random() * Ul.length)]; i == e || i == t || i == a || i == o;) i = Ul[Math.floor(Math.random() * Ul.length)];
        if ("Muzzle" == e || "Muzzle" == t || "Muzzle" == a || "Muzzle" == o || "Muzzle" == i) {

            Gl = ot[Math.floor(Math.random() * ot.length)];
            document.querySelector("#primary1").innerHTML = Gl
        }
        if ("Barrel" == e || "Barrel" == t || "Barrel" == a || "Barrel" == o || "Barrel" == i) {

            Kl = it[Math.floor(Math.random() * it.length)];
            document.querySelector("#primary2").innerHTML = Kl
        }
        if ("Optic" == e || "Optic" == t || "Optic" == a || "Optic" == o || "Optic" == i) {

            Hl = nt[Math.floor(Math.random() * nt.length)];
            document.querySelector("#primary3").innerHTML = Hl
        }
        if ("Stock" == e || "Stock" == t || "Stock" == a || "Stock" == o || "Stock" == i) {

            zl = lt[Math.floor(Math.random() * lt.length)];
            document.querySelector("#primary4").innerHTML = zl
        }
        if ("Perk" == e || "Perk" == t || "Perk" == a || "Perk" == o || "Perk" == i) {

            Zl = Mt[Math.floor(Math.random() * Mt.length)];
            document.querySelector("#primary5").innerHTML = Zl
        }
        if ("Laser" == e || "Laser" == t || "Laser" == a || "Laser" == o || "Laser" == i) {

            Nl = "LASER - OWC Laser - Tactical";
            document.querySelector("#primary6").innerHTML = Nl
        }
        if ("Underbarrel" == e || "Underbarrel" == t || "Underbarrel" == a || "Underbarrel" == o || "Underbarrel" == i) {

            bl = locusUnderbarrel[Math.floor(Math.random() * locusUnderbarrel.length)];
            document.querySelector("#primary7").innerHTML = bl
        }
        if ("Ammunition" == e || "Ammunition" == t || "Ammunition" == a || "Ammunition" == o || "Ammunition" == i) {

            ql = Rt[Math.floor(Math.random() * Rt.length)];
            document.querySelector("#primary8").innerHTML = ql
        }
        if ("Rear Grip" == e || "Rear Grip" == t || "Rear Grip" == a || "Rear Grip" == o || "Rear Grip" == i) {

            Dl = ct[Math.floor(Math.random() * ct.length)];
            document.querySelector("#primary9").innerHTML = Dl
        }
    } else if ("SNIPER - Outlaw" == nl) {

        if ("Muzzle" == e || "Muzzle" == t || "Muzzle" == a || "Muzzle" == o || "Muzzle" == i) {

            Gl = ht[Math.floor(Math.random() * ht.length)];
            document.querySelector("#primary1").innerHTML = Gl
        }
        if ("Barrel" == e || "Barrel" == t || "Barrel" == a || "Barrel" == o || "Barrel" == i) {

            Kl = mt[Math.floor(Math.random() * mt.length)];
            document.querySelector("#primary2").innerHTML = Kl
        }
        if ("Optic" == e || "Optic" == t || "Optic" == a || "Optic" == o || "Optic" == i) {

            Hl = pt[Math.floor(Math.random() * pt.length)];
            document.querySelector("#primary3").innerHTML = Hl
        }
        if ("Stock" == e || "Stock" == t || "Stock" == a || "Stock" == o || "Stock" == i) {

            zl = St[Math.floor(Math.random() * St.length)];
            document.querySelector("#primary4").innerHTML = zl
        }
        if ("Perk" == e || "Perk" == t || "Perk" == a || "Perk" == o || "Perk" == i) {

            Zl = dt[Math.floor(Math.random() * dt.length)];
            document.querySelector("#primary5").innerHTML = Zl
        }
        if ("Laser" == e || "Laser" == t || "Laser" == a || "Laser" == o || "Laser" == i) {
            Nl = "LASER - OWC Laser - Tactical";
            document.querySelector("#primary6").innerHTML = Nl
        }
        if ("Underbarrel" == e || "Underbarrel" == t || "Underbarrel" == a || "Underbarrel" == o || "Underbarrel" == i) {
            bl = "UNDERBARREL - Bipod";
            document.querySelector("#primary7").innerHTML = bl
        }
        if ("Ammunition" == e || "Ammunition" == t || "Ammunition" == a || "Ammunition" == o || "Ammunition" == i) {
            ql = Lt[Math.floor(Math.random() * Lt.length)];
            document.querySelector("#primary8").innerHTML = ql
        }
        if ("Rear Grip" == e || "Rear Grip" == t || "Rear Grip" == a || "Rear Grip" == o || "Rear Grip" == i) {
            Dl = ut[Math.floor(Math.random() * ut.length)];
            document.querySelector("#primary9").innerHTML = Dl
        }
    } else if ("SNIPER - NA-45" == nl) {


        for (e = Bl[Math.floor(Math.random() * Bl.length)], t = Bl[Math.floor(Math.random() * Bl.length)]; e == t;) t = Bl[Math.floor(Math.random() * Bl.length)];
        for (a = Bl[Math.floor(Math.random() * Bl.length)]; a == e || a == t;) a = Bl[Math.floor(Math.random() * Bl.length)];
        for (o = Bl[Math.floor(Math.random() * Bl.length)]; o == e || o == t || o == a;) o = Bl[Math.floor(Math.random() * Bl.length)];
        for (i = Bl[Math.floor(Math.random() * Bl.length)]; i == e || i == t || i == a || i == o;) i = Bl[Math.floor(Math.random() * Bl.length)];

        if ("Muzzle" == e || "Muzzle" == t || "Muzzle" == a || "Muzzle" == o || "Muzzle" == i) {

            Gl = Tt[Math.floor(Math.random() * Tt.length)];
            document.querySelector("#primary1").innerHTML = Gl
        }
        if ("Barrel" == e || "Barrel" == t || "Barrel" == a || "Barrel" == o || "Barrel" == i) {

            Kl = Et[Math.floor(Math.random() * Et.length)];
            document.querySelector("#primary2").innerHTML = Kl
        }
        if ("Optic" == e || "Optic" == t || "Optic" == a || "Optic" == o || "Optic" == i) {
            Hl = gt[Math.floor(Math.random() * gt.length)];
            document.querySelector("#primary3").innerHTML = Hl
        }
        if ("Stock" == e || "Stock" == t || "Stock" == a || "Stock" == o || "Stock" == i) {
            zl = Pt[Math.floor(Math.random() * Pt.length)];
            document.querySelector("#primary4").innerHTML = zl
        }
        if ("Perk" == e || "Perk" == t || "Perk" == a || "Perk" == o || "Perk" == i) {
            Zl = At[Math.floor(Math.random() * At.length)];
            document.querySelector("#primary5").innerHTML = Zl
        }
        if ("Laser" == e || "Laser" == t || "Laser" == a || "Laser" == o || "Laser" == i) {
            Nl = "LASER - OWC Laser - Tactical";
            document.querySelector("#primary6").innerHTML = Nl
        }
        if ("Underbarrel" == e || "Underbarrel" == t || "Underbarrel" == a || "Underbarrel" == o || "Underbarrel" == i) {
            bl = Ot[Math.floor(Math.random() * Ot.length)];
            document.querySelector("#primary7").innerHTML = bl
        }
        if ("Ammunition" == e || "Ammunition" == t || "Ammunition" == a || "Ammunition" == o || "Ammunition" == i) {
            ql = st[Math.floor(Math.random() * st.length)];
            document.querySelector("#primary8").innerHTML = ql
        }
        if ("Rear Grip" == e || "Rear Grip" == t || "Rear Grip" == a || "Rear Grip" == o || "Rear Grip" == i) {
            Dl = na45RearGrip[Math.floor(Math.random() * na45RearGrip.length)];
            document.querySelector("#primary9").innerHTML = Dl
        }
    } else if ("LMG - S36" == nl) {
        if ("Muzzle" == e || "Muzzle" == t || "Muzzle" == a || "Muzzle" == o || "Muzzle" == i) {
            Gl = ft[Math.floor(Math.random() * ft.length)];
            document.querySelector("#primary1").innerHTML = Gl
        }
        if ("Barrel" == e || "Barrel" == t || "Barrel" == a || "Barrel" == o || "Barrel" == i) {
            Kl = Ct[Math.floor(Math.random() * Ct.length)];
            document.querySelector("#primary2").innerHTML = Kl
        }
        if ("Optic" == e || "Optic" == t || "Optic" == a || "Optic" == o || "Optic" == i) {
            Hl = c[Math.floor(Math.random() * c.length)];
            document.querySelector("#primary3").innerHTML = Hl
        }
        if ("Stock" == e || "Stock" == t || "Stock" == a || "Stock" == o || "Stock" == i) {
            zl = It[Math.floor(Math.random() * It.length)];
            document.querySelector("#primary4").innerHTML = zl
        }
        if ("Perk" == e || "Perk" == t || "Perk" == a || "Perk" == o || "Perk" == i) {
            Zl = yt[Math.floor(Math.random() * yt.length)];
            document.querySelector("#primary5").innerHTML = Zl
        }
        if ("Laser" == e || "Laser" == t || "Laser" == a || "Laser" == o || "Laser" == i) {
            Nl = Ut[Math.floor(Math.random() * Ut.length)];
            document.querySelector("#primary6").innerHTML = Nl
        }
        if ("Underbarrel" == e || "Underbarrel" == t || "Underbarrel" == a || "Underbarrel" == o || "Underbarrel" == i) {
            bl = kt[Math.floor(Math.random() * kt.length)];
            document.querySelector("#primary7").innerHTML = bl
        }
        if ("Ammunition" == e || "Ammunition" == t || "Ammunition" == a || "Ammunition" == o || "Ammunition" == i) {
            ql = Bt[Math.floor(Math.random() * Bt.length)];
            document.querySelector("#primary8").innerHTML = ql
        }
        if ("Rear Grip" == e || "Rear Grip" == t || "Rear Grip" == a || "Rear Grip" == o || "Rear Grip" == i) {
            Dl = Gt[Math.floor(Math.random() * Gt.length)];
            document.querySelector("#primary9").innerHTML = Dl
        }
    } else if ("LMG - UL736" == nl) {
        if ("Muzzle" == e || "Muzzle" == t || "Muzzle" == a || "Muzzle" == o || "Muzzle" == i) {
            Gl = Kt[Math.floor(Math.random() * Kt.length)];
            document.querySelector("#primary1").innerHTML = Gl
        }
        if ("Barrel" == e || "Barrel" == t || "Barrel" == a || "Barrel" == o || "Barrel" == i) {
            Kl = Ht[Math.floor(Math.random() * Ht.length)];
            document.querySelector("#primary2").innerHTML = Kl
        }
        if ("Optic" == e || "Optic" == t || "Optic" == a || "Optic" == o || "Optic" == i) {
            Hl = c[Math.floor(Math.random() * c.length)];
            document.querySelector("#primary3").innerHTML = Hl
        }
        if ("Stock" == e || "Stock" == t || "Stock" == a || "Stock" == o || "Stock" == i) {
            zl = zt[Math.floor(Math.random() * zt.length)];
            document.querySelector("#primary4").innerHTML = zl
        }
        if ("Perk" == e || "Perk" == t || "Perk" == a || "Perk" == o || "Perk" == i) {
            Zl = Zt[Math.floor(Math.random() * Zt.length)];
            document.querySelector("#primary5").innerHTML = Zl
        }
        if ("Laser" == e || "Laser" == t || "Laser" == a || "Laser" == o || "Laser" == i) {
            Nl = Nt[Math.floor(Math.random() * Nt.length)];
            document.querySelector("#primary6").innerHTML = Nl
        }
        if ("Underbarrel" == e || "Underbarrel" == t || "Underbarrel" == a || "Underbarrel" == o || "Underbarrel" == i) {
            bl = bt[Math.floor(Math.random() * bt.length)];
            document.querySelector("#primary7").innerHTML = bl
        }
        if ("Ammunition" == e || "Ammunition" == t || "Ammunition" == a || "Ammunition" == o || "Ammunition" == i) {
            ql = qt[Math.floor(Math.random() * qt.length)];
            document.querySelector("#primary8").innerHTML = ql
        }
        if ("Rear Grip" == e || "Rear Grip" == t || "Rear Grip" == a || "Rear Grip" == o || "Rear Grip" == i) {
            Dl = Dt[Math.floor(Math.random() * Dt.length)];
            document.querySelector("#primary9").innerHTML = Dl
        }
    } else if ("LMG - RPD" == nl) {
        if ("Muzzle" == e || "Muzzle" == t || "Muzzle" == a || "Muzzle" == o || "Muzzle" == i) {
            Gl = Ft[Math.floor(Math.random() * Ft.length)];
            document.querySelector("#primary1").innerHTML = Gl
        }
        if ("Barrel" == e || "Barrel" == t || "Barrel" == a || "Barrel" == o || "Barrel" == i) {
            Kl = Wt[Math.floor(Math.random() * Wt.length)];
            document.querySelector("#primary2").innerHTML = Kl
        }
        if ("Optic" == e || "Optic" == t || "Optic" == a || "Optic" == o || "Optic" == i) {
            Hl = c[Math.floor(Math.random() * c.length)];
            document.querySelector("#primary3").innerHTML = Hl
        }
        if ("Stock" == e || "Stock" == t || "Stock" == a || "Stock" == o || "Stock" == i) {
            zl = Xt[Math.floor(Math.random() * Xt.length)];
            document.querySelector("#primary4").innerHTML = zl
        }
        if ("Perk" == e || "Perk" == t || "Perk" == a || "Perk" == o || "Perk" == i) {
            Zl = Yt[Math.floor(Math.random() * Yt.length)];
            document.querySelector("#primary5").innerHTML = Zl
        }
        if ("Laser" == e || "Laser" == t || "Laser" == a || "Laser" == o || "Laser" == i) {
            Nl = xt[Math.floor(Math.random() * xt.length)];
            document.querySelector("#primary6").innerHTML = Nl
        }
        if ("Underbarrel" == e || "Underbarrel" == t || "Underbarrel" == a || "Underbarrel" == o || "Underbarrel" == i) {
            bl = Jt[Math.floor(Math.random() * Jt.length)];
            document.querySelector("#primary7").innerHTML = bl
        }
        if ("Ammunition" == e || "Ammunition" == t || "Ammunition" == a || "Ammunition" == o || "Ammunition" == i) {
            ql = vt[Math.floor(Math.random() * vt.length)];
            document.querySelector("#primary8").innerHTML = ql
        }
        if ("Rear Grip" == e || "Rear Grip" == t || "Rear Grip" == a || "Rear Grip" == o || "Rear Grip" == i) {
            Dl = wt[Math.floor(Math.random() * wt.length)];
            document.querySelector("#primary9").innerHTML = Dl
        }
    } else if ("LMG - M4LMG" == nl) {
        if ("Muzzle" == e || "Muzzle" == t || "Muzzle" == a || "Muzzle" == o || "Muzzle" == i) {
            Gl = Qt[Math.floor(Math.random() * Qt.length)];
            document.querySelector("#primary1").innerHTML = Gl
        }
        if ("Barrel" == e || "Barrel" == t || "Barrel" == a || "Barrel" == o || "Barrel" == i) {
            Kl = Vt[Math.floor(Math.random() * Vt.length)];
            document.querySelector("#primary2").innerHTML = Kl
        }
        if ("Optic" == e || "Optic" == t || "Optic" == a || "Optic" == o || "Optic" == i) {
            Hl = c[Math.floor(Math.random() * c.length)];
            document.querySelector("#primary3").innerHTML = Hl
        }
        if ("Stock" == e || "Stock" == t || "Stock" == a || "Stock" == o || "Stock" == i) {
            zl = jt[Math.floor(Math.random() * jt.length)];
            document.querySelector("#primary4").innerHTML = zl
        }
        if ("Perk" == e || "Perk" == t || "Perk" == a || "Perk" == o || "Perk" == i) {
            Zl = $t[Math.floor(Math.random() * $t.length)];
            document.querySelector("#primary5").innerHTML = Zl
        }
        if ("Laser" == e || "Laser" == t || "Laser" == a || "Laser" == o || "Laser" == i) {
            Nl = _t[Math.floor(Math.random() * _t.length)];
            document.querySelector("#primary6").innerHTML = Nl
        }
        if ("Underbarrel" == e || "Underbarrel" == t || "Underbarrel" == a || "Underbarrel" == o || "Underbarrel" == i) {
            bl = ra[Math.floor(Math.random() * ra.length)];
            document.querySelector("#primary7").innerHTML = bl
        }
        if ("Ammunition" == e || "Ammunition" == t || "Ammunition" == a || "Ammunition" == o || "Ammunition" == i) {
            ql = ea[Math.floor(Math.random() * ea.length)];
            document.querySelector("#primary8").innerHTML = ql
        }
        if ("Rear Grip" == e || "Rear Grip" == t || "Rear Grip" == a || "Rear Grip" == o || "Rear Grip" == i) {
            Dl = ta[Math.floor(Math.random() * ta.length)];
            document.querySelector("#primary9").innerHTML = Dl
        }
    } else if ("LMG - Chopper" == nl) {
        if ("Muzzle" == e || "Muzzle" == t || "Muzzle" == a || "Muzzle" == o || "Muzzle" == i) {
            Gl = aa[Math.floor(Math.random() * aa.length)];
            document.querySelector("#primary1").innerHTML = Gl
        }
        if ("Barrel" == e || "Barrel" == t || "Barrel" == a || "Barrel" == o || "Barrel" == i) {
            Kl = oa[Math.floor(Math.random() * oa.length)];
            document.querySelector("#primary2").innerHTML = Kl
        }
        if ("Optic" == e || "Optic" == t || "Optic" == a || "Optic" == o || "Optic" == i) {
            Hl = c[Math.floor(Math.random() * c.length)];
            document.querySelector("#primary3").innerHTML = Hl
        }
        if ("Stock" == e || "Stock" == t || "Stock" == a || "Stock" == o || "Stock" == i) {
            zl = ia[Math.floor(Math.random() * ia.length)];
            document.querySelector("#primary4").innerHTML = zl
        }
        if ("Perk" == e || "Perk" == t || "Perk" == a || "Perk" == o || "Perk" == i) {
            Zl = na[Math.floor(Math.random() * na.length)];
            document.querySelector("#primary5").innerHTML = Zl
        }
        if ("Laser" == e || "Laser" == t || "Laser" == a || "Laser" == o || "Laser" == i) {
            Nl = la[Math.floor(Math.random() * la.length)];
            document.querySelector("#primary6").innerHTML = Nl
        }
        if ("Underbarrel" == e || "Underbarrel" == t || "Underbarrel" == a || "Underbarrel" == o || "Underbarrel" == i) {
            bl = Ma[Math.floor(Math.random() * Ma.length)];
            document.querySelector("#primary7").innerHTML = bl
        }
        if ("Ammunition" == e || "Ammunition" == t || "Ammunition" == a || "Ammunition" == o || "Ammunition" == i) {
            ql = Ra[Math.floor(Math.random() * Ra.length)];
            document.querySelector("#primary8").innerHTML = ql
        }
        if ("Rear Grip" == e || "Rear Grip" == t || "Rear Grip" == a || "Rear Grip" == o || "Rear Grip" == i) {
            Dl = ca[Math.floor(Math.random() * ca.length)];
            document.querySelector("#primary9").innerHTML = Dl
        }
    } else if ("SMG - RUS-79U" == nl) {
        if ("Muzzle" == e || "Muzzle" == t || "Muzzle" == a || "Muzzle" == o || "Muzzle" == i) {
            Gl = ha[Math.floor(Math.random() * ha.length)];
            document.querySelector("#primary1").innerHTML = Gl
        }
        if ("Barrel" == e || "Barrel" == t || "Barrel" == a || "Barrel" == o || "Barrel" == i) {
            Kl = ma[Math.floor(Math.random() * ma.length)];
            document.querySelector("#primary2").innerHTML = Kl
        }
        if ("Optic" == e || "Optic" == t || "Optic" == a || "Optic" == o || "Optic" == i) {
            Hl = pa[Math.floor(Math.random() * pa.length)];
            document.querySelector("#primary3").innerHTML = Hl
        }
        if ("Stock" == e || "Stock" == t || "Stock" == a || "Stock" == o || "Stock" == i) {
            zl = Sa[Math.floor(Math.random() * Sa.length)];
            document.querySelector("#primary4").innerHTML = zl
        }
        if ("Perk" == e || "Perk" == t || "Perk" == a || "Perk" == o || "Perk" == i) {
            Zl = da[Math.floor(Math.random() * da.length)];
            document.querySelector("#primary5").innerHTML = Zl
        }
        if ("Laser" == e || "Laser" == t || "Laser" == a || "Laser" == o || "Laser" == i) {
            Nl = La[Math.floor(Math.random() * La.length)];
            document.querySelector("#primary6").innerHTML = Nl
        }
        if ("Underbarrel" == e || "Underbarrel" == t || "Underbarrel" == a || "Underbarrel" == o || "Underbarrel" == i) {
            bl = ua[Math.floor(Math.random() * ua.length)];
            document.querySelector("#primary7").innerHTML = bl
        }
        if ("Ammunition" == e || "Ammunition" == t || "Ammunition" == a || "Ammunition" == o || "Ammunition" == i) {
            ql = Ta[Math.floor(Math.random() * Ta.length)];
            document.querySelector("#primary8").innerHTML = ql
        }
        if ("Rear Grip" == e || "Rear Grip" == t || "Rear Grip" == a || "Rear Grip" == o || "Rear Grip" == i) {
            Dl = Ea[Math.floor(Math.random() * Ea.length)];
            document.querySelector("#primary9").innerHTML = Dl
        }
    } else if ("SMG - Chicom" == nl) {
        if ("Muzzle" == e || "Muzzle" == t || "Muzzle" == a || "Muzzle" == o || "Muzzle" == i) {
            Gl = ga[Math.floor(Math.random() * ga.length)];
            document.querySelector("#primary1").innerHTML = Gl
        }
        if ("Barrel" == e || "Barrel" == t || "Barrel" == a || "Barrel" == o || "Barrel" == i) {
            Kl = Pa[Math.floor(Math.random() * Pa.length)];
            document.querySelector("#primary2").innerHTML = Kl
        }
        if ("Optic" == e || "Optic" == t || "Optic" == a || "Optic" == o || "Optic" == i) {
            Hl = Aa[Math.floor(Math.random() * Aa.length)];
            document.querySelector("#primary3").innerHTML = Hl
        }
        if ("Stock" == e || "Stock" == t || "Stock" == a || "Stock" == o || "Stock" == i) {
            zl = Oa[Math.floor(Math.random() * Oa.length)];
            document.querySelector("#primary4").innerHTML = zl
        }
        if ("Perk" == e || "Perk" == t || "Perk" == a || "Perk" == o || "Perk" == i) {
            Zl = sa[Math.floor(Math.random() * sa.length)];
            document.querySelector("#primary5").innerHTML = Zl
        }
        if ("Laser" == e || "Laser" == t || "Laser" == a || "Laser" == o || "Laser" == i) {
            Nl = fa[Math.floor(Math.random() * fa.length)];
            document.querySelector("#primary6").innerHTML = Nl
        }
        if ("Underbarrel" == e || "Underbarrel" == t || "Underbarrel" == a || "Underbarrel" == o || "Underbarrel" == i) {
            bl = Ca[Math.floor(Math.random() * Ca.length)];
            document.querySelector("#primary7").innerHTML = bl
        }
        if ("Ammunition" == e || "Ammunition" == t || "Ammunition" == a || "Ammunition" == o || "Ammunition" == i) {
            ql = Ia[Math.floor(Math.random() * Ia.length)];
            document.querySelector("#primary8").innerHTML = ql
        }
        if ("Rear Grip" == e || "Rear Grip" == t || "Rear Grip" == a || "Rear Grip" == o || "Rear Grip" == i) {
            Dl = ya[Math.floor(Math.random() * ya.length)];
            document.querySelector("#primary9").innerHTML = Dl
        }
    } else if ("SMG - PDW-57" == nl) {
        for (e = kl[Math.floor(Math.random() * kl.length)], t = kl[Math.floor(Math.random() * kl.length)]; e == t;) t = kl[Math.floor(Math.random() * kl.length)];
        for (a = kl[Math.floor(Math.random() * kl.length)]; a == e || a == t;) a = kl[Math.floor(Math.random() * kl.length)];
        for (o = kl[Math.floor(Math.random() * kl.length)]; o == e || o == t || o == a;) o = kl[Math.floor(Math.random() * kl.length)];
        for (i = kl[Math.floor(Math.random() * kl.length)]; i == e || i == t || i == a || i == o;) i = kl[Math.floor(Math.random() * kl.length)];
        if ("Muzzle" == e || "Muzzle" == t || "Muzzle" == a || "Muzzle" == o || "Muzzle" == i) {
            Gl = Ua[Math.floor(Math.random() * Ua.length)];
            document.querySelector("#primary1").innerHTML = Gl
        }
        if ("Barrel" == e || "Barrel" == t || "Barrel" == a || "Barrel" == o || "Barrel" == i) {
            Kl = ka[Math.floor(Math.random() * ka.length)];
            document.querySelector("#primary2").innerHTML = Kl
        }
        if ("Optic" == e || "Optic" == t || "Optic" == a || "Optic" == o || "Optic" == i) {
            Hl = Ba[Math.floor(Math.random() * Ba.length)];
            document.querySelector("#primary3").innerHTML = Hl
        }
        if ("Stock" == e || "Stock" == t || "Stock" == a || "Stock" == o || "Stock" == i) {
            zl = Ga[Math.floor(Math.random() * Ga.length)];
            document.querySelector("#primary4").innerHTML = zl
        }
        if ("Perk" == e || "Perk" == t || "Perk" == a || "Perk" == o || "Perk" == i) {
            Zl = Ka[Math.floor(Math.random() * Ka.length)];
            document.querySelector("#primary5").innerHTML = Zl
        }
        if ("Laser" == e || "Laser" == t || "Laser" == a || "Laser" == o || "Laser" == i) {
            Nl = Ha[Math.floor(Math.random() * Ha.length)];
            document.querySelector("#primary6").innerHTML = Nl
        }
        if ("Underbarrel" == e || "Underbarrel" == t || "Underbarrel" == a || "Underbarrel" == o || "Underbarrel" == i) {
            bl = za[Math.floor(Math.random() * za.length)];
            document.querySelector("#primary7").innerHTML = bl
        }
        if ("Ammunition" == e || "Ammunition" == t || "Ammunition" == a || "Ammunition" == o || "Ammunition" == i) {
            ql = pdw57Ammunition[Math.floor(Math.random() * pdw57Ammunition.length)];
            document.querySelector("#primary8").innerHTML = ql
        }
        if ("Rear Grip" == e || "Rear Grip" == t || "Rear Grip" == a || "Rear Grip" == o || "Rear Grip" == i) {
            Dl = Za[Math.floor(Math.random() * Za.length)];
            document.querySelector("#primary9").innerHTML = Dl
        }
    } else if ("SMG - Razorback" == nl) {
        if ("Muzzle" == e || "Muzzle" == t || "Muzzle" == a || "Muzzle" == o || "Muzzle" == i) {
            Gl = Na[Math.floor(Math.random() * Na.length)];
            document.querySelector("#primary1").innerHTML = Gl
        }
        if ("Barrel" == e || "Barrel" == t || "Barrel" == a || "Barrel" == o || "Barrel" == i) {
            Kl = ba[Math.floor(Math.random() * ba.length)];
            document.querySelector("#primary2").innerHTML = Kl
        }
        if ("Optic" == e || "Optic" == t || "Optic" == a || "Optic" == o || "Optic" == i) {
            Hl = qa[Math.floor(Math.random() * qa.length)];
            document.querySelector("#primary3").innerHTML = Hl
        }
        if ("Stock" == e || "Stock" == t || "Stock" == a || "Stock" == o || "Stock" == i) {
            zl = Da[Math.floor(Math.random() * Da.length)];
            document.querySelector("#primary4").innerHTML = zl
        }
        if ("Perk" == e || "Perk" == t || "Perk" == a || "Perk" == o || "Perk" == i) {
            Zl = Fa[Math.floor(Math.random() * Fa.length)];
            document.querySelector("#primary5").innerHTML = Zl
        }
        if ("Laser" == e || "Laser" == t || "Laser" == a || "Laser" == o || "Laser" == i) {
            Nl = Wa[Math.floor(Math.random() * Wa.length)];
            document.querySelector("#primary6").innerHTML = Nl
        }
        if ("Underbarrel" == e || "Underbarrel" == t || "Underbarrel" == a || "Underbarrel" == o || "Underbarrel" == i) {
            bl = Xa[Math.floor(Math.random() * Xa.length)];
            document.querySelector("#primary7").innerHTML = bl
        }
        if ("Ammunition" == e || "Ammunition" == t || "Ammunition" == a || "Ammunition" == o || "Ammunition" == i) {
            ql = "AMMUNITION - Extended Mag A";
            document.querySelector("#primary8").innerHTML = ql
        }
        if ("Rear Grip" == e || "Rear Grip" == t || "Rear Grip" == a || "Rear Grip" == o || "Rear Grip" == i) {
            Dl = Ya[Math.floor(Math.random() * Ya.length)];
            document.querySelector("#primary9").innerHTML = Dl
        }
    } else if ("SMG - MSMC" == nl) {
        if ("Muzzle" == e || "Muzzle" == t || "Muzzle" == a || "Muzzle" == o || "Muzzle" == i) {
            Gl = xa[Math.floor(Math.random() * xa.length)];
            document.querySelector("#primary1").innerHTML = Gl
        }
        if ("Barrel" == e || "Barrel" == t || "Barrel" == a || "Barrel" == o || "Barrel" == i) {
            Kl = Ja[Math.floor(Math.random() * Ja.length)];
            document.querySelector("#primary2").innerHTML = Kl
        }
        if ("Optic" == e || "Optic" == t || "Optic" == a || "Optic" == o || "Optic" == i) {
            Hl = va[Math.floor(Math.random() * va.length)];
            document.querySelector("#primary3").innerHTML = Hl
        }
        if ("Stock" == e || "Stock" == t || "Stock" == a || "Stock" == o || "Stock" == i) {
            zl = wa[Math.floor(Math.random() * wa.length)];
            document.querySelector("#primary4").innerHTML = zl
        }
        if ("Perk" == e || "Perk" == t || "Perk" == a || "Perk" == o || "Perk" == i) {
            Zl = Qa[Math.floor(Math.random() * Qa.length)];
            document.querySelector("#primary5").innerHTML = Zl
        }
        if ("Laser" == e || "Laser" == t || "Laser" == a || "Laser" == o || "Laser" == i) {
            Nl = Va[Math.floor(Math.random() * Va.length)];
            document.querySelector("#primary6").innerHTML = Nl
        }
        if ("Underbarrel" == e || "Underbarrel" == t || "Underbarrel" == a || "Underbarrel" == o || "Underbarrel" == i) {
            bl = ja[Math.floor(Math.random() * ja.length)];
            document.querySelector("#primary7").innerHTML = bl
        }
        if ("Ammunition" == e || "Ammunition" == t || "Ammunition" == a || "Ammunition" == o || "Ammunition" == i) {
            ql = $a[Math.floor(Math.random() * $a.length)];
            document.querySelector("#primary8").innerHTML = ql
        }
        if ("Rear Grip" == e || "Rear Grip" == t || "Rear Grip" == a || "Rear Grip" == o || "Rear Grip" == i) {
            Dl = _a[Math.floor(Math.random() * _a.length)];
            document.querySelector("#primary9").innerHTML = Dl
        }
    } else if ("SMG - HG 40" == nl) {
        if ("Muzzle" == e || "Muzzle" == t || "Muzzle" == a || "Muzzle" == o || "Muzzle" == i) {
            Gl = ro[Math.floor(Math.random() * ro.length)];
            document.querySelector("#primary1").innerHTML = Gl
        }
        if ("Barrel" == e || "Barrel" == t || "Barrel" == a || "Barrel" == o || "Barrel" == i) {
            Kl = eo[Math.floor(Math.random() * eo.length)];
            document.querySelector("#primary2").innerHTML = Kl
        }
        if ("Optic" == e || "Optic" == t || "Optic" == a || "Optic" == o || "Optic" == i) {
            Hl = to[Math.floor(Math.random() * to.length)];
            document.querySelector("#primary3").innerHTML = Hl
        }
        if ("Stock" == e || "Stock" == t || "Stock" == a || "Stock" == o || "Stock" == i) {
            zl = ao[Math.floor(Math.random() * ao.length)];
            document.querySelector("#primary4").innerHTML = zl
        }
        if ("Perk" == e || "Perk" == t || "Perk" == a || "Perk" == o || "Perk" == i) {
            Zl = oo[Math.floor(Math.random() * oo.length)];
            document.querySelector("#primary5").innerHTML = Zl
        }
        if ("Laser" == e || "Laser" == t || "Laser" == a || "Laser" == o || "Laser" == i) {
            Nl = io[Math.floor(Math.random() * io.length)];
            document.querySelector("#primary6").innerHTML = Nl
        }
        if ("Underbarrel" == e || "Underbarrel" == t || "Underbarrel" == a || "Underbarrel" == o || "Underbarrel" == i) {
            bl = no[Math.floor(Math.random() * no.length)];
            document.querySelector("#primary7").innerHTML = bl
        }
        if ("Ammunition" == e || "Ammunition" == t || "Ammunition" == a || "Ammunition" == o || "Ammunition" == i) {
            ql = lo[Math.floor(Math.random() * lo.length)];
            document.querySelector("#primary8").innerHTML = ql
        }
        if ("Rear Grip" == e || "Rear Grip" == t || "Rear Grip" == a || "Rear Grip" == o || "Rear Grip" == i) {
            Dl = Mo[Math.floor(Math.random() * Mo.length)];
            document.querySelector("#primary9").innerHTML = Dl
        }
    } else if ("SMG - Pharo" == nl) {
        if ("Muzzle" == e || "Muzzle" == t || "Muzzle" == a || "Muzzle" == o || "Muzzle" == i) {
            Gl = Ro[Math.floor(Math.random() * Ro.length)];
            document.querySelector("#primary1").innerHTML = Gl
        }
        if ("Barrel" == e || "Barrel" == t || "Barrel" == a || "Barrel" == o || "Barrel" == i) {
            Kl = co[Math.floor(Math.random() * co.length)];
            document.querySelector("#primary2").innerHTML = Kl
        }
        if ("Optic" == e || "Optic" == t || "Optic" == a || "Optic" == o || "Optic" == i) {
            Hl = ho[Math.floor(Math.random() * ho.length)];
            document.querySelector("#primary3").innerHTML = Hl
        }
        if ("Stock" == e || "Stock" == t || "Stock" == a || "Stock" == o || "Stock" == i) {
            zl = mo[Math.floor(Math.random() * mo.length)];
            document.querySelector("#primary4").innerHTML = zl
        }
        if ("Perk" == e || "Perk" == t || "Perk" == a || "Perk" == o || "Perk" == i) {
            Zl = po[Math.floor(Math.random() * po.length)];
            document.querySelector("#primary5").innerHTML = Zl
        }
        if ("Laser" == e || "Laser" == t || "Laser" == a || "Laser" == o || "Laser" == i) {
            Nl = So[Math.floor(Math.random() * So.length)];
            document.querySelector("#primary6").innerHTML = Nl
        }
        if ("Underbarrel" == e || "Underbarrel" == t || "Underbarrel" == a || "Underbarrel" == o || "Underbarrel" == i) {
            bl = Lo[Math.floor(Math.random() * Lo.length)];
            document.querySelector("#primary7").innerHTML = bl
        }
        if ("Ammunition" == e || "Ammunition" == t || "Ammunition" == a || "Ammunition" == o || "Ammunition" == i) {
            ql = uo[Math.floor(Math.random() * uo.length)];
            document.querySelector("#primary8").innerHTML = ql
        }
        if ("Rear Grip" == e || "Rear Grip" == t || "Rear Grip" == a || "Rear Grip" == o || "Rear Grip" == i) {
            Dl = To[Math.floor(Math.random() * To.length)];
            document.querySelector("#primary9").innerHTML = Dl
        }
    } else if ("SMG - GKS" == nl) {
        if ("Muzzle" == e || "Muzzle" == t || "Muzzle" == a || "Muzzle" == o || "Muzzle" == i) {
            Gl = Eo[Math.floor(Math.random() * Eo.length)];
            document.querySelector("#primary1").innerHTML = Gl
        }
        if ("Barrel" == e || "Barrel" == t || "Barrel" == a || "Barrel" == o || "Barrel" == i) {
            Kl = go[Math.floor(Math.random() * go.length)];
            document.querySelector("#primary2").innerHTML = Kl
        }
        if ("Optic" == e || "Optic" == t || "Optic" == a || "Optic" == o || "Optic" == i) {
            Hl = Po[Math.floor(Math.random() * Po.length)];
            document.querySelector("#primary3").innerHTML = Hl
        }
        if ("Stock" == e || "Stock" == t || "Stock" == a || "Stock" == o || "Stock" == i) {
            zl = Ao[Math.floor(Math.random() * Ao.length)];
            document.querySelector("#primary4").innerHTML = zl
        }
        if ("Perk" == e || "Perk" == t || "Perk" == a || "Perk" == o || "Perk" == i) {
            Zl = Oo[Math.floor(Math.random() * Oo.length)];
            document.querySelector("#primary5").innerHTML = Zl
        }
        if ("Laser" == e || "Laser" == t || "Laser" == a || "Laser" == o || "Laser" == i) {
            Nl = so[Math.floor(Math.random() * so.length)];
            document.querySelector("#primary6").innerHTML = Nl
        }
        if ("Underbarrel" == e || "Underbarrel" == t || "Underbarrel" == a || "Underbarrel" == o || "Underbarrel" == i) {
            bl = fo[Math.floor(Math.random() * fo.length)];
            document.querySelector("#primary7").innerHTML = bl
        }
        if ("Ammunition" == e || "Ammunition" == t || "Ammunition" == a || "Ammunition" == o || "Ammunition" == i) {
            ql = Co[Math.floor(Math.random() * Co.length)];
            document.querySelector("#primary8").innerHTML = ql
        }
        if ("Rear Grip" == e || "Rear Grip" == t || "Rear Grip" == a || "Rear Grip" == o || "Rear Grip" == i) {
            Dl = Io[Math.floor(Math.random() * Io.length)];
            document.querySelector("#primary9").innerHTML = Dl
        }
    } else if ("SMG - Cordite" == nl) {
        if ("Muzzle" == e || "Muzzle" == t || "Muzzle" == a || "Muzzle" == o || "Muzzle" == i) {
            Gl = yo[Math.floor(Math.random() * yo.length)];
            document.querySelector("#primary1").innerHTML = Gl
        }
        if ("Barrel" == e || "Barrel" == t || "Barrel" == a || "Barrel" == o || "Barrel" == i) {
            Kl = Uo[Math.floor(Math.random() * Uo.length)];
            document.querySelector("#primary2").innerHTML = Kl
        }
        if ("Optic" == e || "Optic" == t || "Optic" == a || "Optic" == o || "Optic" == i) {
            Hl = ko[Math.floor(Math.random() * ko.length)];
            document.querySelector("#primary3").innerHTML = Hl
        }
        if ("Stock" == e || "Stock" == t || "Stock" == a || "Stock" == o || "Stock" == i) {
            zl = Bo[Math.floor(Math.random() * Bo.length)];
            document.querySelector("#primary4").innerHTML = zl
        }
        if ("Perk" == e || "Perk" == t || "Perk" == a || "Perk" == o || "Perk" == i) {
            Zl = Go[Math.floor(Math.random() * Go.length)];
            document.querySelector("#primary5").innerHTML = Zl
        }
        if ("Laser" == e || "Laser" == t || "Laser" == a || "Laser" == o || "Laser" == i) {
            Nl = Ko[Math.floor(Math.random() * Ko.length)];
            document.querySelector("#primary6").innerHTML = Nl
        }
        if ("Underbarrel" == e || "Underbarrel" == t || "Underbarrel" == a || "Underbarrel" == o || "Underbarrel" == i) {
            bl = Ho[Math.floor(Math.random() * Ho.length)];
            document.querySelector("#primary7").innerHTML = bl
        }
        if ("Ammunition" == e || "Ammunition" == t || "Ammunition" == a || "Ammunition" == o || "Ammunition" == i) {
            ql = zo[Math.floor(Math.random() * zo.length)];
            document.querySelector("#primary8").innerHTML = ql
        }
        if ("Rear Grip" == e || "Rear Grip" == t || "Rear Grip" == a || "Rear Grip" == o || "Rear Grip" == i) {
            Dl = Zo[Math.floor(Math.random() * Zo.length)];
            document.querySelector("#primary9").innerHTML = Dl
        }
    } else if ("SMG - QQ9" == nl) {
        if ("Muzzle" == e || "Muzzle" == t || "Muzzle" == a || "Muzzle" == o || "Muzzle" == i) {
            Gl = No[Math.floor(Math.random() * No.length)];
            document.querySelector("#primary1").innerHTML = Gl
        }
        if ("Barrel" == e || "Barrel" == t || "Barrel" == a || "Barrel" == o || "Barrel" == i) {
            Kl = bo[Math.floor(Math.random() * bo.length)];
            document.querySelector("#primary2").innerHTML = Kl
        }
        if ("Optic" == e || "Optic" == t || "Optic" == a || "Optic" == o || "Optic" == i) {
            Hl = qo[Math.floor(Math.random() * qo.length)];
            document.querySelector("#primary3").innerHTML = Hl
        }
        if ("Stock" == e || "Stock" == t || "Stock" == a || "Stock" == o || "Stock" == i) {
            zl = Do[Math.floor(Math.random() * Do.length)];
            document.querySelector("#primary4").innerHTML = zl
        }
        if ("Perk" == e || "Perk" == t || "Perk" == a || "Perk" == o || "Perk" == i) {
            Zl = Fo[Math.floor(Math.random() * Fo.length)];
            document.querySelector("#primary5").innerHTML = Zl
        }
        if ("Laser" == e || "Laser" == t || "Laser" == a || "Laser" == o || "Laser" == i) {
            Nl = Wo[Math.floor(Math.random() * Wo.length)];
            document.querySelector("#primary6").innerHTML = Nl
        }
        if ("Underbarrel" == e || "Underbarrel" == t || "Underbarrel" == a || "Underbarrel" == o || "Underbarrel" == i) {
            bl = Xo[Math.floor(Math.random() * Xo.length)];
            document.querySelector("#primary7").innerHTML = bl
        }
        if ("Ammunition" == e || "Ammunition" == t || "Ammunition" == a || "Ammunition" == o || "Ammunition" == i) {
            ql = Yo[Math.floor(Math.random() * Yo.length)];
            document.querySelector("#primary8").innerHTML = ql
        }
        if ("Rear Grip" == e || "Rear Grip" == t || "Rear Grip" == a || "Rear Grip" == o || "Rear Grip" == i) {
            Dl = xo[Math.floor(Math.random() * xo.length)];
            document.querySelector("#primary9").innerHTML = Dl
        }
    } else if ("SMG - Fennec" == nl) {
        if ("Muzzle" == e || "Muzzle" == t || "Muzzle" == a || "Muzzle" == o || "Muzzle" == i) {
            Gl = Jo[Math.floor(Math.random() * Jo.length)];
            document.querySelector("#primary1").innerHTML = Gl
        }
        if ("Barrel" == e || "Barrel" == t || "Barrel" == a || "Barrel" == o || "Barrel" == i) {
            Kl = vo[Math.floor(Math.random() * vo.length)];
            document.querySelector("#primary2").innerHTML = Kl
        }
        if ("Optic" == e || "Optic" == t || "Optic" == a || "Optic" == o || "Optic" == i) {
            Hl = wo[Math.floor(Math.random() * wo.length)];
            document.querySelector("#primary3").innerHTML = Hl
        }
        if ("Stock" == e || "Stock" == t || "Stock" == a || "Stock" == o || "Stock" == i) {
            zl = Qo[Math.floor(Math.random() * Qo.length)];
            document.querySelector("#primary4").innerHTML = zl
        }
        if ("Perk" == e || "Perk" == t || "Perk" == a || "Perk" == o || "Perk" == i) {
            Zl = Vo[Math.floor(Math.random() * Vo.length)];
            document.querySelector("#primary5").innerHTML = Zl
        }
        if ("Laser" == e || "Laser" == t || "Laser" == a || "Laser" == o || "Laser" == i) {
            Nl = jo[Math.floor(Math.random() * jo.length)];
            document.querySelector("#primary6").innerHTML = Nl
        }
        if ("Underbarrel" == e || "Underbarrel" == t || "Underbarrel" == a || "Underbarrel" == o || "Underbarrel" == i) {
            bl = $o[Math.floor(Math.random() * $o.length)];
            document.querySelector("#primary7").innerHTML = bl
        }
        if ("Ammunition" == e || "Ammunition" == t || "Ammunition" == a || "Ammunition" == o || "Ammunition" == i) {
            ql = _o[Math.floor(Math.random() * _o.length)];
            document.querySelector("#primary8").innerHTML = ql
        }
        if ("Rear Grip" == e || "Rear Grip" == t || "Rear Grip" == a || "Rear Grip" == o || "Rear Grip" == i) {
            Dl = ri[Math.floor(Math.random() * ri.length)];
            document.querySelector("#primary9").innerHTML = Dl
        }
    } else if ("SMG - AGR 556" == nl) {
        if ("Muzzle" == e || "Muzzle" == t || "Muzzle" == a || "Muzzle" == o || "Muzzle" == i) {
            Gl = ei[Math.floor(Math.random() * ei.length)];
            document.querySelector("#primary1").innerHTML = Gl
        }
        if ("Barrel" == e || "Barrel" == t || "Barrel" == a || "Barrel" == o || "Barrel" == i) {
            Kl = ti[Math.floor(Math.random() * ti.length)];
            document.querySelector("#primary2").innerHTML = Kl
        }
        if ("Optic" == e || "Optic" == t || "Optic" == a || "Optic" == o || "Optic" == i) {
            Hl = ai[Math.floor(Math.random() * ai.length)];
            document.querySelector("#primary3").innerHTML = Hl
        }
        if ("Stock" == e || "Stock" == t || "Stock" == a || "Stock" == o || "Stock" == i) {
            zl = oi[Math.floor(Math.random() * oi.length)];
            document.querySelector("#primary4").innerHTML = zl
        }
        if ("Perk" == e || "Perk" == t || "Perk" == a || "Perk" == o || "Perk" == i) {
            Zl = ii[Math.floor(Math.random() * ii.length)];
            document.querySelector("#primary5").innerHTML = Zl
        }
        if ("Laser" == e || "Laser" == t || "Laser" == a || "Laser" == o || "Laser" == i) {
            Nl = ni[Math.floor(Math.random() * ni.length)];
            document.querySelector("#primary6").innerHTML = Nl
        }
        if ("Underbarrel" == e || "Underbarrel" == t || "Underbarrel" == a || "Underbarrel" == o || "Underbarrel" == i) {
            bl = li[Math.floor(Math.random() * li.length)];
            document.querySelector("#primary7").innerHTML = bl
        }
        if ("Ammunition" == e || "Ammunition" == t || "Ammunition" == a || "Ammunition" == o || "Ammunition" == i) {
            ql = Mi[Math.floor(Math.random() * Mi.length)];
            document.querySelector("#primary8").innerHTML = ql
        }
        if ("Rear Grip" == e || "Rear Grip" == t || "Rear Grip" == a || "Rear Grip" == o || "Rear Grip" == i) {
            Dl = Ri[Math.floor(Math.random() * Ri.length)];
            document.querySelector("#primary9").innerHTML = Dl
        }
    } else if ("SMG - QXR" == nl) {
        if ("Muzzle" == e || "Muzzle" == t || "Muzzle" == a || "Muzzle" == o || "Muzzle" == i) {
            Gl = ci[Math.floor(Math.random() * ci.length)];
            document.querySelector("#primary1").innerHTML = Gl
        }
        if ("Barrel" == e || "Barrel" == t || "Barrel" == a || "Barrel" == o || "Barrel" == i) {
            Kl = hi[Math.floor(Math.random() * hi.length)];
            document.querySelector("#primary2").innerHTML = Kl
        }
        if ("Optic" == e || "Optic" == t || "Optic" == a || "Optic" == o || "Optic" == i) {
            Hl = mi[Math.floor(Math.random() * mi.length)];
            document.querySelector("#primary3").innerHTML = Hl
        }
        if ("Stock" == e || "Stock" == t || "Stock" == a || "Stock" == o || "Stock" == i) {
            zl = pi[Math.floor(Math.random() * pi.length)];
            document.querySelector("#primary4").innerHTML = zl
        }
        if ("Perk" == e || "Perk" == t || "Perk" == a || "Perk" == o || "Perk" == i) {
            Zl = Si[Math.floor(Math.random() * Si.length)];
            document.querySelector("#primary5").innerHTML = Zl
        }
        if ("Laser" == e || "Laser" == t || "Laser" == a || "Laser" == o || "Laser" == i) {
            Nl = di[Math.floor(Math.random() * di.length)];
            document.querySelector("#primary6").innerHTML = Nl
        }
        if ("Underbarrel" == e || "Underbarrel" == t || "Underbarrel" == a || "Underbarrel" == o || "Underbarrel" == i) {
            bl = Li[Math.floor(Math.random() * Li.length)];
            document.querySelector("#primary7").innerHTML = bl
        }
        if ("Ammunition" == e || "Ammunition" == t || "Ammunition" == a || "Ammunition" == o || "Ammunition" == i) {
            ql = ui[Math.floor(Math.random() * ui.length)];
            document.querySelector("#primary8").innerHTML = ql
        }
        if ("Rear Grip" == e || "Rear Grip" == t || "Rear Grip" == a || "Rear Grip" == o || "Rear Grip" == i) {
            Dl = Ti[Math.floor(Math.random() * Ti.length)];
            document.querySelector("#primary9").innerHTML = Dl
        }
    } else if ("SHOTGUN - HS2126" == nl) {
        if ("Muzzle" == e || "Muzzle" == t || "Muzzle" == a || "Muzzle" == o || "Muzzle" == i) {
            Gl = Ei[Math.floor(Math.random() * Ei.length)];
            document.querySelector("#primary1").innerHTML = Gl
        }
        if ("Barrel" == e || "Barrel" == t || "Barrel" == a || "Barrel" == o || "Barrel" == i) {
            Kl = gi[Math.floor(Math.random() * gi.length)];
            document.querySelector("#primary2").innerHTML = Kl
        }
        if ("Optic" == e || "Optic" == t || "Optic" == a || "Optic" == o || "Optic" == i) {
            Hl = Pi[Math.floor(Math.random() * Pi.length)];
            document.querySelector("#primary3").innerHTML = Hl
        }
        if ("Stock" == e || "Stock" == t || "Stock" == a || "Stock" == o || "Stock" == i) {
            zl = Ai[Math.floor(Math.random() * Ai.length)];
            document.querySelector("#primary4").innerHTML = zl
        }
        if ("Perk" == e || "Perk" == t || "Perk" == a || "Perk" == o || "Perk" == i) {
            Zl = Oi[Math.floor(Math.random() * Oi.length)];
            document.querySelector("#primary5").innerHTML = Zl
        }
        if ("Laser" == e || "Laser" == t || "Laser" == a || "Laser" == o || "Laser" == i) {
            Nl = si[Math.floor(Math.random() * si.length)];
            document.querySelector("#primary6").innerHTML = Nl
        }
        if ("Underbarrel" == e || "Underbarrel" == t || "Underbarrel" == a || "Underbarrel" == o || "Underbarrel" == i) {
            bl = fi[Math.floor(Math.random() * fi.length)];
            document.querySelector("#primary7").innerHTML = bl
        }
        if ("Ammunition" == e || "Ammunition" == t || "Ammunition" == a || "Ammunition" == o || "Ammunition" == i) {
            ql = Ci[Math.floor(Math.random() * Ci.length)];
            document.querySelector("#primary8").innerHTML = ql
        }
        if ("Rear Grip" == e || "Rear Grip" == t || "Rear Grip" == a || "Rear Grip" == o || "Rear Grip" == i) {
            Dl = Ii[Math.floor(Math.random() * Ii.length)];
            document.querySelector("#primary9").innerHTML = Dl
        }
    } else if ("SHOTGUN - BY15" == nl) {
        if ("Muzzle" == e || "Muzzle" == t || "Muzzle" == a || "Muzzle" == o || "Muzzle" == i) {
            Gl = yi[Math.floor(Math.random() * yi.length)];
            document.querySelector("#primary1").innerHTML = Gl
        }
        if ("Barrel" == e || "Barrel" == t || "Barrel" == a || "Barrel" == o || "Barrel" == i) {
            Kl = Ui[Math.floor(Math.random() * Ui.length)];
            document.querySelector("#primary2").innerHTML = Kl
        }
        if ("Optic" == e || "Optic" == t || "Optic" == a || "Optic" == o || "Optic" == i) {
            Hl = ki[Math.floor(Math.random() * ki.length)];
            document.querySelector("#primary3").innerHTML = Hl
        }
        if ("Stock" == e || "Stock" == t || "Stock" == a || "Stock" == o || "Stock" == i) {
            zl = Bi[Math.floor(Math.random() * Bi.length)];
            document.querySelector("#primary4").innerHTML = zl
        }
        if ("Perk" == e || "Perk" == t || "Perk" == a || "Perk" == o || "Perk" == i) {
            Zl = Gi[Math.floor(Math.random() * Gi.length)];
            document.querySelector("#primary5").innerHTML = Zl
        }
        if ("Laser" == e || "Laser" == t || "Laser" == a || "Laser" == o || "Laser" == i) {
            Nl = Ki[Math.floor(Math.random() * Ki.length)];
            document.querySelector("#primary6").innerHTML = Nl
        }
        if ("Underbarrel" == e || "Underbarrel" == t || "Underbarrel" == a || "Underbarrel" == o || "Underbarrel" == i) {
            bl = Hi[Math.floor(Math.random() * Hi.length)];
            document.querySelector("#primary7").innerHTML = bl
        }
        if ("Ammunition" == e || "Ammunition" == t || "Ammunition" == a || "Ammunition" == o || "Ammunition" == i) {
            ql = zi[Math.floor(Math.random() * zi.length)];
            document.querySelector("#primary8").innerHTML = ql
        }
        if ("Rear Grip" == e || "Rear Grip" == t || "Rear Grip" == a || "Rear Grip" == o || "Rear Grip" == i) {
            Dl = Zi[Math.floor(Math.random() * Zi.length)];
            document.querySelector("#primary9").innerHTML = Dl
        }
    } else if ("SHOTGUN - HSO405" == nl) {
        if ("Muzzle" == e || "Muzzle" == t || "Muzzle" == a || "Muzzle" == o || "Muzzle" == i) {
            Gl = Ni[Math.floor(Math.random() * Ni.length)];
            document.querySelector("#primary1").innerHTML = Gl
        }
        if ("Barrel" == e || "Barrel" == t || "Barrel" == a || "Barrel" == o || "Barrel" == i) {
            Kl = bi[Math.floor(Math.random() * bi.length)];
            document.querySelector("#primary2").innerHTML = Kl
        }
        if ("Optic" == e || "Optic" == t || "Optic" == a || "Optic" == o || "Optic" == i) {
            Hl = qi[Math.floor(Math.random() * qi.length)];
            document.querySelector("#primary3").innerHTML = Hl
        }
        if ("Stock" == e || "Stock" == t || "Stock" == a || "Stock" == o || "Stock" == i) {
            zl = Di[Math.floor(Math.random() * Di.length)];
            document.querySelector("#primary4").innerHTML = zl
        }
        if ("Perk" == e || "Perk" == t || "Perk" == a || "Perk" == o || "Perk" == i) {
            Zl = Fi[Math.floor(Math.random() * Fi.length)];
            document.querySelector("#primary5").innerHTML = Zl
        }
        if ("Laser" == e || "Laser" == t || "Laser" == a || "Laser" == o || "Laser" == i) {
            Nl = Wi[Math.floor(Math.random() * Wi.length)];
            document.querySelector("#primary6").innerHTML = Nl
        }
        if ("Underbarrel" == e || "Underbarrel" == t || "Underbarrel" == a || "Underbarrel" == o || "Underbarrel" == i) {
            bl = Xi[Math.floor(Math.random() * Xi.length)];
            document.querySelector("#primary7").innerHTML = bl
        }
        if ("Ammunition" == e || "Ammunition" == t || "Ammunition" == a || "Ammunition" == o || "Ammunition" == i) {
            ql = Yi[Math.floor(Math.random() * Yi.length)];
            document.querySelector("#primary8").innerHTML = ql
        }
        if ("Rear Grip" == e || "Rear Grip" == t || "Rear Grip" == a || "Rear Grip" == o || "Rear Grip" == i) {
            Dl = xi[Math.floor(Math.random() * xi.length)];
            document.querySelector("#primary9").innerHTML = Dl
        }
    } else if ("SHOTGUN - Striker" == nl) {
        if ("Muzzle" == e || "Muzzle" == t || "Muzzle" == a || "Muzzle" == o || "Muzzle" == i) {
            Gl = Ji[Math.floor(Math.random() * Ji.length)];
            document.querySelector("#primary1").innerHTML = Gl
        }
        if ("Barrel" == e || "Barrel" == t || "Barrel" == a || "Barrel" == o || "Barrel" == i) {
            Kl = vi[Math.floor(Math.random() * vi.length)];
            document.querySelector("#primary2").innerHTML = Kl
        }
        if ("Optic" == e || "Optic" == t || "Optic" == a || "Optic" == o || "Optic" == i) {
            Hl = wi[Math.floor(Math.random() * wi.length)];
            document.querySelector("#primary3").innerHTML = Hl
        }
        if ("Stock" == e || "Stock" == t || "Stock" == a || "Stock" == o || "Stock" == i) {
            zl = Qi[Math.floor(Math.random() * Qi.length)];
            document.querySelector("#primary4").innerHTML = zl
        }
        if ("Perk" == e || "Perk" == t || "Perk" == a || "Perk" == o || "Perk" == i) {
            Zl = Vi[Math.floor(Math.random() * Vi.length)];
            document.querySelector("#primary5").innerHTML = Zl
        }
        if ("Laser" == e || "Laser" == t || "Laser" == a || "Laser" == o || "Laser" == i) {
            Nl = ji[Math.floor(Math.random() * ji.length)];
            document.querySelector("#primary6").innerHTML = Nl
        }
        if ("Underbarrel" == e || "Underbarrel" == t || "Underbarrel" == a || "Underbarrel" == o || "Underbarrel" == i) {
            bl = $i[Math.floor(Math.random() * $i.length)];
            document.querySelector("#primary7").innerHTML = bl
        }
        if ("Ammunition" == e || "Ammunition" == t || "Ammunition" == a || "Ammunition" == o || "Ammunition" == i) {
            ql = _i[Math.floor(Math.random() * _i.length)];
            document.querySelector("#primary8").innerHTML = ql
        }
        if ("Rear Grip" == e || "Rear Grip" == t || "Rear Grip" == a || "Rear Grip" == o || "Rear Grip" == i) {
            Dl = rn[Math.floor(Math.random() * rn.length)];
            document.querySelector("#primary9").innerHTML = Dl
        }
    } else if ("SHOTGUN - KRM 262" == nl) {
        if ("Muzzle" == e || "Muzzle" == t || "Muzzle" == a || "Muzzle" == o || "Muzzle" == i) {
            Gl = en[Math.floor(Math.random() * en.length)];
            document.querySelector("#primary1").innerHTML = Gl
        }
        if ("Barrel" == e || "Barrel" == t || "Barrel" == a || "Barrel" == o || "Barrel" == i) {
            Kl = tn[Math.floor(Math.random() * tn.length)];
            document.querySelector("#primary2").innerHTML = Kl
        }
        if ("Optic" == e || "Optic" == t || "Optic" == a || "Optic" == o || "Optic" == i) {
            Hl = an[Math.floor(Math.random() * an.length)];
            document.querySelector("#primary3").innerHTML = Hl
        }
        if ("Stock" == e || "Stock" == t || "Stock" == a || "Stock" == o || "Stock" == i) {
            zl = on[Math.floor(Math.random() * on.length)];
            document.querySelector("#primary4").innerHTML = zl
        }
        if ("Perk" == e || "Perk" == t || "Perk" == a || "Perk" == o || "Perk" == i) {
            Zl = nn[Math.floor(Math.random() * nn.length)];
            document.querySelector("#primary5").innerHTML = Zl
        }
        if ("Laser" == e || "Laser" == t || "Laser" == a || "Laser" == o || "Laser" == i) {
            Nl = ln[Math.floor(Math.random() * ln.length)];
            document.querySelector("#primary6").innerHTML = Nl
        }
        if ("Underbarrel" == e || "Underbarrel" == t || "Underbarrel" == a || "Underbarrel" == o || "Underbarrel" == i) {
            bl = Mn[Math.floor(Math.random() * Mn.length)];
            document.querySelector("#primary7").innerHTML = bl
        }
        if ("Ammunition" == e || "Ammunition" == t || "Ammunition" == a || "Ammunition" == o || "Ammunition" == i) {
            ql = Rn[Math.floor(Math.random() * Rn.length)];
            document.querySelector("#primary8").innerHTML = ql
        }
        if ("Rear Grip" == e || "Rear Grip" == t || "Rear Grip" == a || "Rear Grip" == o || "Rear Grip" == i) {
            Dl = cn[Math.floor(Math.random() * cn.length)];
            document.querySelector("#primary9").innerHTML = Dl
        }
    } else if ("SHOTGUN - Echo" == nl) {
        if ("Muzzle" == e || "Muzzle" == t || "Muzzle" == a || "Muzzle" == o || "Muzzle" == i) {
            Gl = hn[Math.floor(Math.random() * hn.length)];
            document.querySelector("#primary1").innerHTML = Gl
        }
        if ("Barrel" == e || "Barrel" == t || "Barrel" == a || "Barrel" == o || "Barrel" == i) {
            Kl = mn[Math.floor(Math.random() * mn.length)];
            document.querySelector("#primary2").innerHTML = Kl
        }
        if ("Optic" == e || "Optic" == t || "Optic" == a || "Optic" == o || "Optic" == i) {
            Hl = pn[Math.floor(Math.random() * pn.length)];
            document.querySelector("#primary3").innerHTML = Hl
        }
        if ("Stock" == e || "Stock" == t || "Stock" == a || "Stock" == o || "Stock" == i) {
            zl = Sn[Math.floor(Math.random() * Sn.length)];
            document.querySelector("#primary4").innerHTML = zl
        }
        if ("Perk" == e || "Perk" == t || "Perk" == a || "Perk" == o || "Perk" == i) {
            Zl = dn[Math.floor(Math.random() * dn.length)];
            document.querySelector("#primary5").innerHTML = Zl
        }
        if ("Laser" == e || "Laser" == t || "Laser" == a || "Laser" == o || "Laser" == i) {
            Nl = Ln[Math.floor(Math.random() * Ln.length)];
            document.querySelector("#primary6").innerHTML = Nl
        }
        if ("Underbarrel" == e || "Underbarrel" == t || "Underbarrel" == a || "Underbarrel" == o || "Underbarrel" == i) {
            bl = un[Math.floor(Math.random() * un.length)];
            document.querySelector("#primary7").innerHTML = bl
        }
        if ("Ammunition" == e || "Ammunition" == t || "Ammunition" == a || "Ammunition" == o || "Ammunition" == i) {
            ql = Tn[Math.floor(Math.random() * Tn.length)];
            document.querySelector("#primary8").innerHTML = ql
        }
        if ("Rear Grip" == e || "Rear Grip" == t || "Rear Grip" == a || "Rear Grip" == o || "Rear Grip" == i) {
            Dl = En[Math.floor(Math.random() * En.length)];
            document.querySelector("#primary9").innerHTML = Dl
        }
    } else if ("MARKSMAN - Kilo Bolt-Action" == nl) {
        if ("Muzzle" == e || "Muzzle" == t || "Muzzle" == a || "Muzzle" == o || "Muzzle" == i) {
            Gl = gn[Math.floor(Math.random() * gn.length)];
            document.querySelector("#primary1").innerHTML = Gl
        }
        if ("Barrel" == e || "Barrel" == t || "Barrel" == a || "Barrel" == o || "Barrel" == i) {
            Kl = Pn[Math.floor(Math.random() * Pn.length)];
            document.querySelector("#primary2").innerHTML = Kl
        }
        if ("Optic" == e || "Optic" == t || "Optic" == a || "Optic" == o || "Optic" == i) {
            Hl = An[Math.floor(Math.random() * An.length)];
            document.querySelector("#primary3").innerHTML = Hl
        }
        if ("Stock" == e || "Stock" == t || "Stock" == a || "Stock" == o || "Stock" == i) {
            zl = On[Math.floor(Math.random() * On.length)];
            document.querySelector("#primary4").innerHTML = zl
        }
        if ("Perk" == e || "Perk" == t || "Perk" == a || "Perk" == o || "Perk" == i) {
            Zl = sn[Math.floor(Math.random() * sn.length)];
            document.querySelector("#primary5").innerHTML = Zl
        }
        if ("Laser" == e || "Laser" == t || "Laser" == a || "Laser" == o || "Laser" == i) {
            Nl = "LASER - OWC Laser - Tactical";
            document.querySelector("#primary6").innerHTML = Nl
        }
        if ("Underbarrel" == e || "Underbarrel" == t || "Underbarrel" == a || "Underbarrel" == o || "Underbarrel" == i) {
            bl = "UNDERBARREL - Bipod";
            document.querySelector("#primary7").innerHTML = bl
        }
        if ("Ammunition" == e || "Ammunition" == t || "Ammunition" == a || "Ammunition" == o || "Ammunition" == i) {
            ql = fn[Math.floor(Math.random() * fn.length)];
            document.querySelector("#primary8").innerHTML = ql
        }
        if ("Rear Grip" == e || "Rear Grip" == t || "Rear Grip" == a || "Rear Grip" == o || "Rear Grip" == i) {
            Dl = Cn[Math.floor(Math.random() * Cn.length)];
            document.querySelector("#primary9").innerHTML = Dl
        }
    } else if ("MARKSMAN - SKS" == nl) {
        if ("Muzzle" == e || "Muzzle" == t || "Muzzle" == a || "Muzzle" == o || "Muzzle" == i) {
            Gl = In[Math.floor(Math.random() * In.length)];
            document.querySelector("#primary1").innerHTML = Gl
        }
        if ("Barrel" == e || "Barrel" == t || "Barrel" == a || "Barrel" == o || "Barrel" == i) {

            Kl = yn[Math.floor(Math.random() * yn.length)];
            document.querySelector("#primary2").innerHTML = Kl
        }
        if ("Optic" == e || "Optic" == t || "Optic" == a || "Optic" == o || "Optic" == i) {

            Hl = Un[Math.floor(Math.random() * Un.length)];
            document.querySelector("#primary3").innerHTML = Hl
        }
        if ("Stock" == e || "Stock" == t || "Stock" == a || "Stock" == o || "Stock" == i) {

            zl = kn[Math.floor(Math.random() * kn.length)];
            document.querySelector("#primary4").innerHTML = zl
        }
        if ("Perk" == e || "Perk" == t || "Perk" == a || "Perk" == o || "Perk" == i) {

            Zl = Bn[Math.floor(Math.random() * Bn.length)];
            document.querySelector("#primary5").innerHTML = Zl
        }
        if ("Laser" == e || "Laser" == t || "Laser" == a || "Laser" == o || "Laser" == i) {

            Nl = "LASER - OWC Laser - Tactical";
            document.querySelector("#primary6").innerHTML = Nl
        }
        if ("Underbarrel" == e || "Underbarrel" == t || "Underbarrel" == a || "Underbarrel" == o || "Underbarrel" == i) {

            bl = Gn[Math.floor(Math.random() * Gn.length)];
            document.querySelector("#primary7").innerHTML = bl
        }
        if ("Ammunition" == e || "Ammunition" == t || "Ammunition" == a || "Ammunition" == o || "Ammunition" == i) {

            ql = Kn[Math.floor(Math.random() * Kn.length)];
            document.querySelector("#primary8").innerHTML = ql
        }
        if ("Rear Grip" == e || "Rear Grip" == t || "Rear Grip" == a || "Rear Grip" == o || "Rear Grip" == i) {

            Dl = Hn[Math.floor(Math.random() * Hn.length)];
            document.querySelector("#primary9").innerHTML = Dl
        }
    }

    for (r = sl[Math.floor(Math.random() * sl.length)], n = sl[Math.floor(Math.random() * sl.length)]; r == n;) n = sl[Math.floor(Math.random() * sl.length)];
    for (l = sl[Math.floor(Math.random() * sl.length)]; l == r || l == n;) l = sl[Math.floor(Math.random() * sl.length)];
    for (M = sl[Math.floor(Math.random() * sl.length)]; M == r || M == n || M == l;) M = sl[Math.floor(Math.random() * sl.length)];
    for (R = sl[Math.floor(Math.random() * sl.length)]; R == r || R == n || R == a || R == M;) R = sl[Math.floor(Math.random() * sl.length)];

    if ("PISTOL - J358" == Ml) {


        if ("Muzzle" == r || "Muzzle" == n || "Muzzle" == l || "Muzzle" == M || "Muzzle" == R) {


            var Fl = zn[Math.floor(Math.random() * zn.length)];
            document.querySelector("#secondary1").innerHTML = Fl
        }
        if ("Barrel" == r || "Barrel" == n || "Barrel" == l || "Barrel" == M || "Barrel" == R) {


            var Wl = Zn[Math.floor(Math.random() * Zn.length)];
            document.querySelector("#secondary2").innerHTML = Wl
        }
        if ("Optic" == r || "Optic" == n || "Optic" == l || "Optic" == M || "Optic" == R) {

            var Xl = Nn[Math.floor(Math.random() * Nn.length)];
            document.querySelector("#secondary3").innerHTML = Xl
        }
        if ("Perk" == r || "Perk" == n || "Perk" == l || "Perk" == M || "Perk" == R) {

            var Yl = bn[Math.floor(Math.random() * bn.length)];
            document.querySelector("#secondary4").innerHTML = Yl
        }
        if ("Laser" == r || "Laser" == n || "Laser" == l || "Laser" == M || "Laser" == R) {
            var xl = qn[Math.floor(Math.random() * qn.length)];
            document.querySelector("#secondary5").innerHTML = xl
        }
        if ("Underbarrel" == r || "Underbarrel" == n || "Underbarrel" == l || "Underbarrel" == M || "Underbarrel" == R) {
            var Jl = Dn[Math.floor(Math.random() * Dn.length)];
            document.querySelector("#secondary6").innerHTML = Jl
        }
        if ("Ammunition" == r || "Ammunition" == n || "Ammunition" == l || "Ammunition" == M || "Ammunition" == R) {
            var vl = Fn[Math.floor(Math.random() * Fn.length)];
            document.querySelector("#secondary7").innerHTML = vl
        }
        if ("Rear Grip" == r || "Rear Grip" == n || "Rear Grip" == l || "Rear Grip" == M || "Rear Grip" == R) {

            var wl = Wn[Math.floor(Math.random() * Wn.length)];
            document.querySelector("#secondary8").innerHTML = wl
        }
    } else if ("PISTOL - MW11" == Ml) {
        if ("Muzzle" == r || "Muzzle" == n || "Muzzle" == l || "Muzzle" == M || "Muzzle" == R) {
            Fl = Xn[Math.floor(Math.random() * Xn.length)];
            document.querySelector("#secondary1").innerHTML = Fl
        }
        if ("Barrel" == r || "Barrel" == n || "Barrel" == l || "Barrel" == M || "Barrel" == R) {
            Wl = Yn[Math.floor(Math.random() * Yn.length)];
            document.querySelector("#secondary2").innerHTML = Wl
        }
        if ("Optic" == r || "Optic" == n || "Optic" == l || "Optic" == M || "Optic" == R) {
            Xl = xn[Math.floor(Math.random() * xn.length)];
            document.querySelector("#secondary3").innerHTML = Xl
        }
        if ("Perk" == r || "Perk" == n || "Perk" == l || "Perk" == M || "Perk" == R) {
            Yl = Jn[Math.floor(Math.random() * Jn.length)];
            document.querySelector("#secondary4").innerHTML = Yl
        }
        if ("Laser" == r || "Laser" == n || "Laser" == l || "Laser" == M || "Laser" == R) {
            xl = vn[Math.floor(Math.random() * vn.length)];
            document.querySelector("#secondary5").innerHTML = xl
        }
        if ("Underbarrel" == r || "Underbarrel" == n || "Underbarrel" == l || "Underbarrel" == M || "Underbarrel" == R) {
            Jl = wn[Math.floor(Math.random() * wn.length)];
            document.querySelector("#secondary6").innerHTML = Jl
        }
        if ("Ammunition" == r || "Ammunition" == n || "Ammunition" == l || "Ammunition" == M || "Ammunition" == R) {
            vl = Qn[Math.floor(Math.random() * Qn.length)];
            document.querySelector("#secondary7").innerHTML = vl
        }
        if ("Rear Grip" == r || "Rear Grip" == n || "Rear Grip" == l || "Rear Grip" == M || "Rear Grip" == R) {
            wl = Vn[Math.floor(Math.random() * Vn.length)];
            document.querySelector("#secondary8").innerHTML = wl
        }
    } else if ("PISTOL - .50 GS" == Ml) {

        if ("Muzzle" == r || "Muzzle" == n || "Muzzle" == l || "Muzzle" == M || "Muzzle" == R) {
            Fl = jn[Math.floor(Math.random() * jn.length)];
            document.querySelector("#secondary1").innerHTML = Fl
        }
        if ("Barrel" == r || "Barrel" == n || "Barrel" == l || "Barrel" == M || "Barrel" == R) {
            Wl = $n[Math.floor(Math.random() * $n.length)];
            document.querySelector("#secondary2").innerHTML = Wl
        }
        if ("Optic" == r || "Optic" == n || "Optic" == l || "Optic" == M || "Optic" == R) {
            Xl = _n[Math.floor(Math.random() * _n.length)];
            document.querySelector("#secondary3").innerHTML = Xl
        }
        if ("Perk" == r || "Perk" == n || "Perk" == l || "Perk" == M || "Perk" == R) {
            Yl = rl[Math.floor(Math.random() * rl.length)];
            document.querySelector("#secondary4").innerHTML = Yl
        }
        if ("Laser" == r || "Laser" == n || "Laser" == l || "Laser" == M || "Laser" == R) {
            xl = el[Math.floor(Math.random() * el.length)];
            document.querySelector("#secondary5").innerHTML = xl
        }
        if ("Underbarrel" == r || "Underbarrel" == n || "Underbarrel" == l || "Underbarrel" == M || "Underbarrel" == R) {
            Jl = tl[Math.floor(Math.random() * tl.length)];
            document.querySelector("#secondary6").innerHTML = Jl
        }
        if ("Ammunition" == r || "Ammunition" == n || "Ammunition" == l || "Ammunition" == M || "Ammunition" == R) {
            vl = al[Math.floor(Math.random() * al.length)];
            document.querySelector("#secondary7").innerHTML = vl
        }
        if ("Rear Grip" == r || "Rear Grip" == n || "Rear Grip" == l || "Rear Grip" == M || "Rear Grip" == R) {
            wl = ol[Math.floor(Math.random() * ol.length)];
            document.querySelector("#secondary8").innerHTML = wl
        }
    }

    document.getElementById("outputs").style.opacity = 1;
    document.getElementById("outputs").scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });

    if (!document.querySelector('#secondary').innerText.includes("PISTOL")){document.querySelector("#secondary1").parentElement.style.display = "none";
	} else {document.querySelector("#secondary1").parentElement.style.display = "block";
	}
}