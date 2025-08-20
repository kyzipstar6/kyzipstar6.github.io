package files;

import java.io.*;
import java.util.*;

public class append {

    void append1() {
        String specin = "        \"name\": \"";
        try {
            BufferedReader rd = new BufferedReader(new FileReader("files/js/pop.js"));
            List<String> docl = null;
            docl = rd.lines().toList();
            rd.close();
            rd = new BufferedReader(new FileReader("files/species.json"));
            List<String> inl = rd.lines().toList();
            rd.close();
            int si = docl.indexOf("//herebeginsappend");
            int ei = docl.indexOf("//hereendsappend");
            StringBuilder docb = new StringBuilder();
            for (int i = 0; i < si; i++) {
                docb.append(docl.get(i) + "\n");
            }
            for (int i = 0; i < inl.size() - 1; i++) {
                if (inl.get(i).contains(specin))
                    docb.append("    function "
                            + inl.get(i).substring(specin.length()).replace("\",", "").replace(" ", "").toLowerCase()
                            + "(){\n      initPopLoop(2.78e05);\r\n" + //
                            "    year-=115e06;\r\n" + //
                            "    setInterval(updateData, 5000);\r\n" + //
                            "}\n\n");
            }
            docb.append("//herebeginsappend");
            docb.append("//hereendsappend");
            for (int i = 0; i < si; i++) {
                docb.append(docl.get(i) + "\n");
            }
            for (int i = ei; i < docl.size() - 1; i++) {
                docb.append(docl.get(i) + "\n");
            }

            FileWriter wrt = new FileWriter("files/js/pop.js");
            wrt.write(docb.toString());
            wrt.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    void writeMethod() {
        String specin = "        \"name\": \"";
        try {
            FileWriter wrt = new FileWriter("files/js/s.js");
            BufferedReader rd = new BufferedReader(new FileReader("files/species.json"));
            List<String> inl = rd.lines().toList();
            rd.close();
            for (int i = 0; i < inl.size() - 1; i++) {
                if (inl.get(i).contains(specin))
                    wrt.write("if(document.getElementById(\"title\").contains(\""
                            + inl.get(i).substring(specin.length()).replace("\",", "")
                            + "\")) "
                            + inl.get(i).substring(specin.length()).replace("\",", "").replace(" ", "").toLowerCase()
                            + "();" + "\n");
            }
            wrt.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static void main(String[] args) {
        String specin = "        \"name\": \"";
        try {
            BufferedReader rd = new BufferedReader(new FileReader("files/js/pop.js"));
            List<String> docl = null;
            docl = rd.lines().toList();
            rd.close();
            rd = new BufferedReader(new FileReader("files/species.json"));
            List<String> inl = rd.lines().toList();
            rd.close();
            int si = docl.indexOf("//herebeginsappend");
            int ei = docl.indexOf("//hereendsappend");
            StringBuilder docb = new StringBuilder();
            for (int i = 0; i < si; i++) {
                docb.append(docl.get(i) + "\n");
            }
            for (int i = 0; i < inl.size() - 1; i++) {
                if (inl.get(i).contains(specin))
                    docb.append("    function "
                            + inl.get(i).substring(specin.length()).replace("\",", "").replace(" ", "").toLowerCase()
                            + "(){\n     if(started.includes(\"f\")){ \n    initPopLoop(2.78e05);\r\n" + //
                            "    year-=115e06;\r\n" + //
                            "    setInterval(updateData, 5000);\r\n" + //
                            " }\r\n" + //
                            "      started =\"y\";}\n\n");
            }
            docb.append("//herebeginsappend");
            docb.append("//hereendsappend");
            for (int i = 0; i < si; i++) {
                docb.append(docl.get(i) + "\n");
            }
            for (int i = ei; i < docl.size() - 1; i++) {
                docb.append(docl.get(i) + "\n");
            }

            FileWriter wrt = new FileWriter("files/js/s.js");
            wrt.write(docb.toString());
            wrt.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}