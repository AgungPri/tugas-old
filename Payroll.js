export default function App() {
  return (
    <View style={{ flex: 1 }}>
      {/* search bar */}
      <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 15 }}>
        <View style={{ marginLeft: 5, marginTop: 20 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderRightWidth: 100, borderColor: 'white' }}>
              <Text style={{}}></Text>
            </View>
            <TouchableOpacity style={{ flex: 1, backgroundColor: 'blue', alignItems: 'center', justifyContent: 'center', borderBottomLeftRadius: 15, borderTopLeftRadius: 15 }}>
              <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#516BEB', color: 'white' }}>Kembali</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flexDirection: 'row', marginBottom: 5 }}>
          <View style={{ flex: 1 }}>
            <View style={{ backgroundColor: '#516BEB', paddingVertical: 7, borderwith: 1, height: 55, width: 150, marginRight: 10, borderBottomRightRadius: 15, borderTopRightRadius: 15 }}>
              <Text style={{ marginLeft: 40, fontSize: 25, fontWeight: 'bold', color: 'white' }}>Payroll</Text>
            </View>
          </View>
        </View>
        {/* Program Pelatihan */}
        <View style={{ marginLeft: 16, marginTop: 40 }}>
          <Text style={{ fontSize: 13, fontWeight: 'normal' }}>Nama</Text>
          <View>
            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Kevin Krisma</Text>
          </View>
        </View>
        <View style={{ marginLeft: 16, marginTop: 40 }}>
          <Text style={{ fontSize: 13, fontWeight: 'normal' }}>NoRekening</Text>
          <View>
            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>7389462784</Text>
          </View>
        </View>
        <View style={{ marginLeft: 16, marginTop: 40 }}>
          <Text style={{ fontSize: 13, fontWeight: 'normal' }}>Bank</Text>
          <View>
            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>BCA</Text>
          </View>
        </View>
        <View style={{ marginLeft: 16, marginTop: 40 }}>
          <Text style={{ fontSize: 13, fontWeight: 'normal' }}>BPJS Kesehatan</Text>
          <View>
            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>09845927548</Text>
          </View>
        </View>
        <View style={{ marginLeft: 16, marginTop: 40 }}>
          <Text style={{ fontSize: 13, fontWeight: 'normal' }}>BPJS Ketenagakerjaan</Text>
          <View>
            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>8234959275948</Text>
          </View>
        </View>
      </View>
    </View>
  );

}

const style = StyleSheet.create({
});
